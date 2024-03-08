import jwt from "jsonwebtoken";
import env from "./envConfig.js";

const createJwt = (email: string, role: string, id: number) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    env.SERVER_SECRET
  );
};

export default createJwt;
