import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.warn("Warning: DATABASE_URL not set. Database features will be limited.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: process.env.DATABASE_URL ? {
    url: process.env.DATABASE_URL,
  } : {
    url: "postgresql://localhost:5432/artisanbuilds", // fallback for migrations only
  },
});
