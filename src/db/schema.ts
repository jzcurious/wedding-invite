import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const guests = pgTable("guests", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    isComingRegistration: boolean("is_coming_registration").default(false),
    isComingBanquet: boolean("is_coming_banquet").default(false),
    hasChildren: boolean("has_children").default(false),
    preferredDrink: text("preferred_drink"),
    dietaryNotes: text("dietary_notes"),
    createdAt: timestamp("created_at").defaultNow(),
});
