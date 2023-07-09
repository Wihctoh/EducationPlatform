import express, { Request, Response } from "express";
import { createUser } from "../service/api.service";

const router = express.Router();

router.post("/reg", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error: any) {
    res.status(403).send(error.message);
  }
});

export default router;
