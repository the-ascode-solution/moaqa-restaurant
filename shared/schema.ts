import {
  pgTable,
  text,
  varchar,
  decimal,
  boolean,
  timestamp,
  integer,
  serial,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/* ----------------------------- USERS TABLE ------------------------------ */

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

/* ---------------------------- MENU ITEMS TABLE -------------------------- */

export const menuItems = pgTable("menu_items", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  isVegetarian: boolean("is_vegetarian").default(false).notNull(),
  isSpicy: boolean("is_spicy").default(false).notNull(),
  isGlutenFree: boolean("is_gluten_free").default(false).notNull(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
});
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;

/* ------------------------------- REVIEWS TABLE --------------------------- */

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(), // auto-increment
  name: text("name").notNull(),
  email: text("email").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isVisible: boolean("is_visible").default(false).notNull(), // admin approves
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
  isVisible: true,
});

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
