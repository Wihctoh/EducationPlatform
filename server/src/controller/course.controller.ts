import express, { Request, Response } from "express";
import {
  getAllUsersCourses,
  createCourse,
  getUserIDCourses,
  deleteCourse,
  updateCourse,
} from "../service/course.service";
import buildResponse from "../helper/buildResponse";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsersCourses();

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserIDCourses(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course, description } = req.body;
    const data = await createCourse(course, description);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteCourse(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { course, description } = req.body;
    const data = await updateCourse(id, course, description);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default router;
