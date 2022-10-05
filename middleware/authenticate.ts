import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload, decode } from "jsonwebtoken";
import { nextTick } from "process";
import config from "../config/config";

export default interface AuthRequest extends Request {
  user: string | JwtPayload;
}

const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"];

  if (!authorization) return res.status(401).send({ ok: false });

  const token = authorization.split(" ")[1];

  verify(token, config.app.PRIVATE_KEY, (error, decodeToken) => {
    if (error) return res.status(401).send({ ok: false, msg:"Please, try to login again" });
    if (decodeToken !== null) {
      req.user = decodeToken;
      next();
    }
  });
};

export { authenticate };
