import { Request, Response } from "express";

import { getAllMessages } from "../db/queries.js";

async function getIndex(_req: Request, res: Response) {
  const messages = await getAllMessages();
  res.render("index", { messages, title: "Mini Messageboard" });
}

export { getIndex };
