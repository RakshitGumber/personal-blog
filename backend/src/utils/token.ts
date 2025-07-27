import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

export const generateToken = ({ id, email }: { id: any; email: string }) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
