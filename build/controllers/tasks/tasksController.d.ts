import { Request, Response, NextFunction } from "express";
import AuthRequest from "../../middleware/authenticate";
declare const createUserTask: (req: Request, res: Response, _next: NextFunction) => Promise<void>;
declare const getUserTasks: (_req: Request, _res: Response, _next: NextFunction) => Promise<void>;
declare const updateUserTask: (req: AuthRequest, res: Response, _next: NextFunction) => Promise<void>;
declare const deleteUserTask: (_req: Request, res: Response, _next: NextFunction) => Promise<void>;
export { getUserTasks, createUserTask, updateUserTask, deleteUserTask };
