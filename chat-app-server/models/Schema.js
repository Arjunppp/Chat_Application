import { pgTable ,serial , varchar ,uuid} from 'drizzle-orm/pg-core';

// Define the 'loginModel' table schema --- each table scheme will be defined and exported


export const loginModel = pgTable('login', {
  //id :serial('id').primaryKey()  -- will generate auto increment id
  id: uuid('id').primaryKey().defaultRandom() , //This will create an random id,
  firstName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  dateOfBirth: varchar('date_of_birth', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  username: varchar('username', { length: 256 }).notNull().unique(),
  password: varchar('password', { length: 256 }).notNull(),
});

/// to drop an file  npx drizzle-kit drop
//after setting up schema you need to do migration --
//npx drizzle-kit generate  --- will create the tables