import getUserFromToken from "../utilities/getUserFromToken.js";
const authorizeByRole = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token)
            return res.status(403).json({ message: "Unauthorized" });
        const user = getUserFromToken(token);
        req.user = user;
        return next();
    }
    catch (err) {
        return res.status(403).json({ message: "Unauthorized" });
    }
};
export default authorizeByRole;
//# sourceMappingURL=authorizeByRole.js.map