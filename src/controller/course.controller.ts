import express, { Request, Response } from "express";
import {
  getAllUsersCourses,
  createCourse,
  getUserIDCourses,
  deleteCourse,
  updateCourse,
} from "../service/course.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsersCourses();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserIDCourses(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { course } = req.body;
    const data = await createCourse(course);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(403).send(error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteCourse(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { course } = req.body;
    const data = await updateCourse(id, course);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default router;
