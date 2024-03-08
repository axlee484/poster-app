import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";
dotenv.config();
const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  PORT: port(),
  SERVER_SECRET: str(),
  STORAGE: str(),
});

export default env;
