import {
  create,
  read,
  update,
  remove,
  readAll,
} from "../../controllers/base/baseController";
import { Router } from "express";
import UserModel from "../../models/Users/UsersModel";
import { authenticate } from "../../middleware/authenticate";

const userRouter = Router();

// userRouter.use(authenticate);

userRouter.post("", create(UserModel));
userRouter.get("/:id", read(UserModel));
userRouter.post("/:id", update(UserModel));
userRouter.delete("/:id", remove(UserModel));
userRouter.get("", readAll(UserModel));

export { userRouter };
