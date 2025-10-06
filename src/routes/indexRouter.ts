import { Router } from "express";

import { getIndex, postNewMessage } from "../controllers/indexController";

const indexRouter = Router();

indexRouter.post("/new", postNewMessage);
indexRouter.get("/", getIndex);

export default indexRouter;
