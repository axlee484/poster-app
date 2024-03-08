import prisma from "../../utilities/prismaClient.js";
import { selectFieldsUser } from "./createUser.js";
const getAllUsers = async (_req, res) => {
    try {
        if (_req.user?.role != "ADMIN")
            return res.status(403).json({ error: "Unauthorized" });
        const users = await prisma.user.findMany({
            select: selectFieldsUser,
        });
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
};
export default getAllUsers;
//# sourceMappingURL=getAllUser.js.map