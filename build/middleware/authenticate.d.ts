import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
export default interface AuthRequest extends Request {
    user: string | JwtPayload;
}
declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
export { authenticate };
