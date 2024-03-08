import { Response } from "express";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";
declare const postImage: (req: AuthorisedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export default postImage;
