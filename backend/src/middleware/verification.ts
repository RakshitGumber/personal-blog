import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET_KEY);
    //  @ts-ignore
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }
};
