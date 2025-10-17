import { Request, Response } from "express";

import { insertMessage } from "../db/queries.js";
import { Message } from "../types/types.js";

async function postNewMessage(
  req: Request<object, object, Message>,
  res: Response,
) {
  await insertMessage({
    added: new Date(),
    author: req.body.author,
    text: req.body.text,
  });

  res.redirect("/");
}

export { postNewMessage };
