import { Request, Response } from "express";
import prisma from "../../utilities/prismaClient.js";
import createHashedPassword from "../../utilities/createHashedPassword.js";

type createUserRequest = {
  firstName: string;
  lastName?: string;
  password: string;
  email: string;
};

export const selectFieldsUser = {
  id: true,
  firstName: true,
  lastName: true,
  role: true,
};
const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password, email } =
      req.body as createUserRequest;
    const { hashedPassword, salt } = createHashedPassword(password);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        hashedPassword,
        salt,
      },
      select: selectFieldsUser,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default createUser;
