import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Explicitly load the .env file
dotenv.config({ path: ".env" });



export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_KwijyWGm2c7F@ep-shrill-grass-a5xj21pc.us-east-2.aws.neon.tech/portifolio_db?sslmode=require",
  },
});
