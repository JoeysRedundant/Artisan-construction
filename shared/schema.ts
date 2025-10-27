import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact Form Schema
export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  projectType: text("project_type").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Testimonial Type (static data, no database)
export type Testimonial = {
  id: string;
  name: string;
  text: string;
  role: string;
  image: string;
};

// Service Type (static data, no database)
export type Service = {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  detailedDescription: string;
};

// Gallery Item Type (static data, no database)
export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};
