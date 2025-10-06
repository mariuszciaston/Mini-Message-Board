import { Response, Router } from "express";

// const newRouter: Router = Router();
const newRouter = Router();

newRouter.get("/", (_req, res: Response) => {
  res.render("form");
});

export default newRouter;
