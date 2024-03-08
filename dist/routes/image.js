import { Router } from "express";
import multer from "multer";
import postImage from "../controllers/image/postImage.js";
import getImage from "../controllers/image/getImageById.js";
import authorizeByRole from "../middleware/authorizeByRole.js";
import env from "../utilities/envConfig.js";
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, env.STORAGE);
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname.trim().replace(" ", "_").replace("\\", "_"));
    },
});
const upload = multer({ storage: storage });
const imageRouter = Router();
imageRouter.get("/image/:id", authorizeByRole, getImage);
imageRouter.post("/image", upload.single("image"), authorizeByRole, postImage);
export default imageRouter;
//# sourceMappingURL=image.js.map