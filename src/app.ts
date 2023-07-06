import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import courseRouter from "./controller/course.controller";

const app = express();

app.use(bodyParser.json());
app.use("/course", courseRouter);
app.use((er, req: Request, res: Response, next: NextFunction) =>
  res.send(er.message)
);

export default app;
