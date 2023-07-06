import express, { Request, Response } from "express";
import {
  getAllUsersCourses,
  createCourse,
  getUserIDCourses,
} from "../service/course.service";
import { iCourse } from "../interfaces";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data: iCourse[] = await getAllUsersCourses();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: iCourse[] = await getUserIDCourses(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course } = req.body;
    const data: iCourse[] = await createCourse(course);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(403).send(error.message);
  }
});

export default router;
