import jwt from "jsonwebtoken";
import env from "./envConfig.js";
const createJwt = (email, role, id) => {
    return jwt.sign({
        id,
        email,
        role,
    }, env.SERVER_SECRET);
};
export default createJwt;
//# sourceMappingURL=createJwt.js.map