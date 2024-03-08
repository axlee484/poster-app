import { NextFunction, Request, Response } from "express";
import getUserFromToken from "../utilities/getUserFromToken.js";

type authUser = {
  id: number;
  email: string;
  role: "ADMIN" | "USER";
};

export interface AuthorisedRequest extends Request {
  user?: authUser;
}
const authorizeByRole = async (
  req: AuthorisedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Unauthorized" });
    const user = getUserFromToken(token) as authUser;

    req.user = user;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default authorizeByRole;
