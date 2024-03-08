import prisma from "../../utilities/prismaClient.js";
import validatePassword from "../../utilities/validatePassword.js";
import createJwt from "../../utilities/createJwt.js";
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user)
            return res.status(404).json({ message: "invalid creds" });
        const isValidated = validatePassword(password, user.hashedPassword, user.salt);
        if (!isValidated)
            return res.status(404).json({ message: "invalid creds" });
        const token = createJwt(email, user.role, user.id);
        return res.status(200).json({ token });
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
};
export default login;
//# sourceMappingURL=login.js.map