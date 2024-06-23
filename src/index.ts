import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { db } from "./db/sqlite";
import { NewRequest, requests } from "./db/schema";
import { desc } from "drizzle-orm";

const app = new Elysia()
  .use(cors())
  .get("/analyze", () => {
    const data = db
      .select()
      .from(requests)
      .orderBy(desc(requests.createtAt))
      .limit(100);
    return data;
  })
  .get("*", async ({ headers, query, params }) => {
    const newRequest: NewRequest = {
      userAgent: headers["user-agent"],
      headers,
      query,
      params: params["*"],
    };
    await db.insert(requests).values(newRequest);
    return newRequest;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
