import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const { Pool } = pg;
import * as schema from "@shared/schema"; // Import your schema

// Ensure you have DATABASE_URL in your .env file
const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_KwijyWGm2c7F@ep-shrill-grass-a5xj21pc.us-east-2.aws.neon.tech/portifolio_db?sslmode=require",
});

export const db = drizzle(pool, { schema });
