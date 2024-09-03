import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from './Schema.js';
import postgres from "postgres";


const client = postgres('postgresql://postgres:post123@localhost:5432/CHAT_APP');
export const db =  drizzle(client, {schema ,logger:true})