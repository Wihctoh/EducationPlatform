import express, { Request, Response } from "express";
import { createUser, authUser } from "../service/api.service";
import buildResponse from "../helper/buildResponse";

const router = express.Router();

router.post("/reg", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 403, error.message);
  }
});

router.post("/auth", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, pwd } = req.body;
    const data = await authUser(email, pwd);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 403, error.message);
  }
});

export default router;
