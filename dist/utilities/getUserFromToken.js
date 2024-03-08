import jwt from "jsonwebtoken";
import env from "./envConfig.js";
const getUserFromToken = (token) => {
    try {
        return jwt.verify(token, env.SERVER_SECRET);
    }
    catch (err) {
        throw Error("Unauthorized");
    }
};
export default getUserFromToken;
//# sourceMappingURL=getUserFromToken.js.map