import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './models/Schema.js', //Define our path to schema file
  out: './models/migrations', // define path -- where mingrations are created.
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port :process.env.DB_PORT,
    database: process.env.DB_NAME,
   
  },
  verbose:true,
  strict:true
});




// npx drizzle-kit studio   --- to run drizzle-kit studio