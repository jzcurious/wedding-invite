CREATE TABLE "guests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"is_coming_registration" boolean DEFAULT false,
	"is_coming_banquet" boolean DEFAULT false,
	"has_children" boolean DEFAULT false,
	"additional_names" text,
	"preferred_drink" text,
	"dietary_notes" text,
	"created_at" timestamp DEFAULT now()
);
