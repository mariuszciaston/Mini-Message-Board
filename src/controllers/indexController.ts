import { Request, Response } from "express";

import messages from "../db";

interface Message {
  added: Date;
  text: string;
  user: string;
}

interface MessageBody {
  author: Message["user"];
  messageText: Message["text"];
}

function getIndex(_req: Request, res: Response) {
  res.render("index", { messages, title: "Mini Messageboard" });
}

function postNewMessage(
  req: Request<object, object, MessageBody>,
  res: Response,
) {
  const newMessage: Message = {
    added: new Date(),
    text: req.body.messageText,
    user: req.body.author,
  };
  messages.push(newMessage);
  res.redirect("/");
}

export  { getIndex, postNewMessage };
