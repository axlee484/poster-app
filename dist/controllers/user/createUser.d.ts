import { Request, Response } from "express";
export declare const selectFieldsUser: {
    id: boolean;
    firstName: boolean;
    lastName: boolean;
    role: boolean;
};
declare const createUser: (req: Request, res: Response) => Promise<void>;
export default createUser;
