import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { insertMessage } from "../db/queries.js";
import { Message } from "../types/types.js";

const postNewMessage = async function (
  req: Request<object, object, Message>,
  res: Response,
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array());

    res.status(400).render("form", {
      data: req.body,
      errors: errors.array(),
    });
  } else {
    await insertMessage({
      added: new Date(),
      author: req.body.author,
      text: req.body.text,
    });

    res.redirect("/");
  }
};

export { postNewMessage };
