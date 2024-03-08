import { Response } from "express";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";
declare const getAllUsers: (_req: AuthorisedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export default getAllUsers;
