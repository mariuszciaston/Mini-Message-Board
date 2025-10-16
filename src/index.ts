import express from "express";
import path from "node:path";
import { fileURLToPath } from "url";

import errorHandler from "./middlewares/errorHandler.js";
import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.get("/{*splat}", (_req, res) => {
  res.status(404).render("404");
});

app.use(errorHandler);

const port = process.env.PORT ?? "3000";

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running at http://localhost:${port}/`);
});
