import { 
  type User, type InsertUser, 
  type MenuItem, type InsertMenuItem,
  type Review, type InsertReview,
  users, menuItems, reviews 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItem(id: string): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  updateMenuItem(id: string, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined>;
  deleteMenuItem(id: string): Promise<boolean>;
  
  getAllReviews(): Promise<Review[]>;
  getVisibleReviews(): Promise<Review[]>;
  getReview(id: string): Promise<Review | undefined>;
  createReview(review: InsertReview): Promise<Review>;
  toggleReviewVisibility(id: string): Promise<Review | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const result = await db.insert(users).values({ 
      ...insertUser, 
      id,
      password: hashedPassword 
    }).returning();
    return result[0];
  }

  async getAllMenuItems(): Promise<MenuItem[]> {
    return db.select().from(menuItems);
  }

  async getMenuItem(id: string): Promise<MenuItem | undefined> {
    const result = await db.select().from(menuItems).where(eq(menuItems.id, id));
    return result[0];
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const result = await db.insert(menuItems).values({ ...item, id }).returning();
    return result[0];
  }

  async updateMenuItem(id: string, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined> {
    const result = await db.update(menuItems).set(item).where(eq(menuItems.id, id)).returning();
    return result[0];
  }

  async deleteMenuItem(id: string): Promise<boolean> {
    const result = await db.delete(menuItems).where(eq(menuItems.id, id)).returning();
    return result.length > 0;
  }

  async getAllReviews(): Promise<Review[]> {
    return db.select().from(reviews);
  }

  async getVisibleReviews(): Promise<Review[]> {
    return db.select().from(reviews).where(eq(reviews.isVisible, true));
  }

  async getReview(id: string): Promise<Review | undefined> {
    const result = await db.select().from(reviews).where(eq(reviews.id, id));
    return result[0];
  }

  async createReview(review: InsertReview): Promise<Review> {
    const id = randomUUID();
    const result = await db.insert(reviews).values({ 
      ...review, 
      id,
      isVisible: false 
    }).returning();
    return result[0];
  }

  async toggleReviewVisibility(id: string): Promise<Review | undefined> {
    const existing = await this.getReview(id);
    if (!existing) return undefined;
    const result = await db.update(reviews)
      .set({ isVisible: !existing.isVisible })
      .where(eq(reviews.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
