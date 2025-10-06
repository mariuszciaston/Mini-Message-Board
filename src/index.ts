import express from "express";
import { ErrorRequestHandler } from "express";
import path from "node:path";
import { fileURLToPath } from "url";

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

interface CustomError extends Error {
  statusCode?: number;
}

const errorHandler: ErrorRequestHandler = (
  err: CustomError,
  _req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next,
) => {
  console.error(err);
  res.status(err.statusCode ?? 500).send(err.message);
};

app.use(errorHandler);

const hostname = "127.0.0.1";
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running at http://${hostname}:${String(PORT)}/`);
});
