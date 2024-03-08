import { Response } from "express";
import prisma from "../../utilities/prismaClient.js";
import { selectFieldsUser } from "./createUser.js";
import { AuthorisedRequest } from "../../middleware/authorizeByRole.js";

const getUserById = async (req: AuthorisedRequest, res: Response) => {
  try {
    console.log(req.user);
    if (req.user?.role != "ADMIN")
      return res.status(403).json({ error: "Unauthorized" });
    const { id } = req.params;
    const _id = parseInt(id);
    const user = await prisma.user.findUnique({
      where: {
        id: _id,
      },
      select: selectFieldsUser,
    });
    if (!user) res.status(404);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export default getUserById;
