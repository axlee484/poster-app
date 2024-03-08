import crypto from "crypto";
const validatePassword = (
  password: string,
  hashedPassword: string,
  salt: string
) => {
  const rehashed = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");

  //   console.log(rehashed, hashedPassword);
  return rehashed == hashedPassword;
};

export default validatePassword;
