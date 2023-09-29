import express, { Request, Response } from "express";
import { createUser, authUser, deleteUserTest } from "../service/api.service";
import createToken from "../helper/jwt";
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
    const token = createToken(data);

    res.cookie("access_token", token, {
      httpOnly: false,
      secure: true,
    });
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 403, error.message);
  }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteUserTest(id);

    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default router;
