import { Message } from "../types/types.js";
import * as db from "./pool.js";

async function deleteAllMessages() {
  await db.query("TRUNCATE TABLE messages RESTART IDENTITY");
}

async function getAllMessages(): Promise<Message[]> {
  const { rows } = await db.query<Message>("SELECT * FROM messages");
  return rows;
}

async function insertMessage({ added, author, text }: Message) {
  await db.query(
    "INSERT INTO messages (author, text, added) VALUES ($1, $2, $3)",
    [author, text, added],
  );
}

export { deleteAllMessages, getAllMessages, insertMessage };
