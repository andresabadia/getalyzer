import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const requests = sqliteTable("requests", {
  createtAt: text("createt_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  userAgent: text("user_agent").notNull().default(""),
  headers: text("headers", { mode: "json" }).$type<any>().notNull().default({}),
  query: text("query", { mode: "json" }).$type<any>().notNull().default({}),
  params: text("params").notNull().default(""),
});

export type Request = typeof requests.$inferSelect;
export type NewRequest = typeof requests.$inferInsert;
