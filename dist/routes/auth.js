import { Router } from "express";
import login from "../controllers/auth/login.js";
const authRouter = Router();
authRouter.post("/login", login);
export default authRouter;
//# sourceMappingURL=auth.js.map