import { Router } from "express";
import { signInUser, signUpUser } from "../../controllers/auth/auth.controller";

const authRouter = Router();

authRouter.post("/signUp", signUpUser);
authRouter.post("/signIn", signInUser);

export { authRouter };
