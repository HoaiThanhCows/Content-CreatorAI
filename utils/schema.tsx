import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData"),
  aiResponse: text("aiResponse"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt").notNull(),
});

export const UserSubscription = pgTable("userSubscription", {
  id: serial("id").primaryKey(),
  email: varchar("email"),
  userName: varchar("userName"),
  active: boolean("active"),
  paymentId: varchar("payment"),
  JoinDate: varchar("joinDate"),
});