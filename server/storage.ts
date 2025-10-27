import { type Contact, type InsertContact, contacts } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { sql } from "drizzle-orm";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;

  constructor() {
    this.contacts = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt,
      phone: insertContact.phone ?? null 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export class DbStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    if (!db) {
      throw new Error("Database not initialized");
    }
    
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    
    await db.insert(contacts).values({
      id,
      ...insertContact,
      phone: insertContact.phone ?? null,
      createdAt,
    });

    const [contact] = await db.select().from(contacts).where(sql`id = ${id}`);
    if (!contact) {
      throw new Error("Failed to create contact");
    }
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    if (!db) {
      throw new Error("Database not initialized");
    }
    return await db.select().from(contacts);
  }
}

// Use database storage if DATABASE_URL is set, otherwise use memory storage
export const storage = (process.env.DATABASE_URL && db) ? new DbStorage() : new MemStorage();
