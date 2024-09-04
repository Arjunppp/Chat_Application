CREATE TABLE IF NOT EXISTS "login" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstName" varchar(256) NOT NULL,
	"lastName" varchar(256) NOT NULL,
	"dateOfBirth" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	CONSTRAINT "login_username_unique" UNIQUE("username")
);
