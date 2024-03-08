import { Response } from "express";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";
declare const getUserById: (req: AuthorisedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export default getUserById;
