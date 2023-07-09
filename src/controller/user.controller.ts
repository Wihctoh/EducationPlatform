import express, { Response, Request } from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../service/user.service";
const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error: any) {
    res.status(200).send(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default router;
