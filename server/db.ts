import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";

if (!process.env.DATABASE_URL) {
  console.warn("Warning: DATABASE_URL not set. Database features will be limited.");
}

// Disable statement timeout for connection pooling
// Only create client if DATABASE_URL is set
export const db = process.env.DATABASE_URL 
  ? drizzle(postgres(process.env.DATABASE_URL, { prepare: false }), { schema })
  : null;
