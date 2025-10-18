import { Response, Router } from "express";

const newRouter = Router();

import { postNewMessage } from "../controllers/newController.js";
import { validateMessage } from "../middlewares/messageValidator.js";

newRouter.get("/", (_req, res: Response) => {
  res.render("form", {
    data: {},
    errors: [],
  });
});

newRouter.post("/", validateMessage, postNewMessage);

export default newRouter;
