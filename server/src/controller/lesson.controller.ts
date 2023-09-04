import express, { Request, Response } from "express";
import {
  getAllLesson,
  createLesson,
  updateLesson,
  deleteLesson,
  getLessonById,
} from "../service/lesson.service";
import buildResponse from "../helper/buildResponse";

const route = express.Router();

route.get("/", async (req: Request, res: Response) => {
  try {
    const data = await getAllLesson();

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await getLessonById(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const { course_id, title } = req.body;

    const data = await createLesson(course_id, title);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { course_id, title } = req.body;

    const data = await updateLesson(id, course_id, title);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await deleteLesson(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
