CREATE TABLE IF NOT EXISTS "login" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(256) NOT NULL,
	"last_name" varchar(256) NOT NULL,
	"date_of_birth" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	CONSTRAINT "login_username_unique" UNIQUE("username")
);
