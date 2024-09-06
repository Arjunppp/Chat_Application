ALTER TABLE "login" RENAME TO "SignUp";--> statement-breakpoint
ALTER TABLE "SignUp" DROP CONSTRAINT "login_username_unique";--> statement-breakpoint
ALTER TABLE "SignUp" ADD CONSTRAINT "SignUp_username_unique" UNIQUE("username");