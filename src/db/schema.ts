import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const guests = pgTable("guests", {
    id: serial("id").primaryKey(),
    // Имя основного гостя
    name: text("name").notNull(),

    // Присутствие на разных этапах
    isComingRegistration: boolean("is_coming_registration").default(false),
    isComingBanquet: boolean("is_coming_banquet").default(false),

    // Дети
    hasChildren: boolean("has_children").default(false),

    // НОВОЕ: Имена спутников (партнера или членов семьи)
    additionalNames: text("additional_names"),

    // Предпочтения
    preferredDrink: text("preferred_drink"),
    dietaryNotes: text("dietary_notes"),

    // Служебная информация
    createdAt: timestamp("created_at").defaultNow(),
});
