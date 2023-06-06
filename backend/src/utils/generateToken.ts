import { UserType } from "../types/user.type";
import jwt from "jsonwebtoken";
const generateToken = (user: UserType) => {
  const payload = {
    id: user.id,
  };
  const secretKey: any = process.env.JWT_SECRET;
  return jwt.sign(payload, secretKey, { expiresIn: "3d" });
};

export { generateToken };
