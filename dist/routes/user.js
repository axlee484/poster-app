import { Router } from "express";
import getAllUsers from "../controllers/user/getAllUser.js";
import getUserById from "../controllers/user/getUserById.js";
import createUser from "../controllers/user/createUser.js";
import authorizeByRole from "../middleware/authorizeByRole.js";
const userRouter = Router();
userRouter.get("/user", authorizeByRole, getAllUsers);
userRouter.get("/user/:id", authorizeByRole, getUserById);
userRouter.post("/signup", createUser);
export default userRouter;
//# sourceMappingURL=user.js.map