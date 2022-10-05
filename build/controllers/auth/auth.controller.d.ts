import { Request, Response, NextFunction } from "express";
declare const signInUser: (req: Request, res: Response, _next: NextFunction) => Promise<Response<any, Record<string, any>>>;
declare const signUpUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { signInUser, signUpUser };
