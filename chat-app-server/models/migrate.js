//this is actually to migrate the the tables to out actual databse

import "dotenv/config" 
import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';

const migrationClient = postgres('postgresql://postgres:post123@localhost:5432/CHAT_APP', { max: 1 });



async function main() {

   await migrate(drizzle(migrationClient), {
        migrationsFolder:'./migrations'
    });

   await  migrationClient.end()
    
};

main();