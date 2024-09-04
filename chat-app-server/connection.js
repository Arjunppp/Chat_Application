import postgres from 'postgres';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';

config();
// Initialize PostgreSQL client and Drizzle ORM
const queryClient = postgres(process.env.POSTGRES_URI);
export const db = drizzle(queryClient);
