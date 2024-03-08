import express from "express";
import env from "./utilities/envConfig.js";
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";
import imageRouter from "./routes/image.js";

const app = express();
const PORT = env.PORT;

app.listen(PORT, () => console.log("server running at port " + PORT));
app.use(bodyParser.json());
app.use(userRouter);
app.use(authRouter);
app.use(imageRouter);
