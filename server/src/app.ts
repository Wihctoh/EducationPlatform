import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import courseRouter from "./controller/course.controller";
import userRouter from "./controller/user.controller";
import apiRouter from "./controller/api.controller";
import lessonRouter from "./controller/lesson.controller";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/course", courseRouter);
app.use("/user", userRouter);
app.use("/api", apiRouter);
app.use("/lesson", lessonRouter);

app.use((er, req: Request, res: Response, next: NextFunction) => res.send(er.message));

export default app;
