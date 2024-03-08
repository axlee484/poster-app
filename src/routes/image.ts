import { Request, Router } from "express";
import multer from "multer";
import postImage from "../controllers/image/postImage.js";
import getImage from "../controllers/image/getImageById.js";
import authorizeByRole from "../middleware/authorizeByRole.js";
import env from "../utilities/envConfig.js";

const storage = multer.diskStorage({
  destination: function (_req: Request, _file: Express.Multer.File, cb) {
    cb(null, env.STORAGE);
  },
  filename: function (_req: Request, file: Express.Multer.File, cb) {
    cb(null, file.originalname.trim().replace(" ", "_").replace("\\", "_"));
  },
});
const upload = multer({ storage: storage });

const imageRouter = Router();
imageRouter.get("/image/:id", authorizeByRole, getImage);
imageRouter.post("/image", upload.single("image"), authorizeByRole, postImage);
export default imageRouter;
