import { NextFunction, Request, Response } from "express";
type authUser = {
    id: number;
    email: string;
    role: "ADMIN" | "USER";
};
export interface AuthorisedRequest extends Request {
    user?: authUser;
}
declare const authorizeByRole: (req: AuthorisedRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default authorizeByRole;
