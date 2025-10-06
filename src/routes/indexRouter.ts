import { Router } from "express";

import { getIndex, postNewMessage } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.post("/new", postNewMessage);
indexRouter.get("/", getIndex);

export default indexRouter;
