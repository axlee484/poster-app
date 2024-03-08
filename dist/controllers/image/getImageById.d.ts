import { Response } from "express";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";
declare const getImage: (req: AuthorisedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export default getImage;
