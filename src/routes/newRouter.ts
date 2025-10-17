import { Response, Router } from "express";

const newRouter = Router();

import { postNewMessage } from "../controllers/newController.js";

newRouter.get("/", (_req, res: Response) => {
  res.render("form");
});

newRouter.post("/", postNewMessage);

export default newRouter;
