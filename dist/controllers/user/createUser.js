import prisma from "../../utilities/prismaClient.js";
import createHashedPassword from "../../utilities/createHashedPassword.js";
export const selectFieldsUser = {
    id: true,
    firstName: true,
    lastName: true,
    role: true,
};
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, password, email } = req.body;
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
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};
export default createUser;
//# sourceMappingURL=createUser.js.map