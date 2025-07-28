import type { NextFunction, Request, Response } from "express";
import joi from "joi";

export const signupValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = joi.object({
    username: joi.string().min(3).max(24).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "Bad Request", success: false, error });
  }

  next();
};

export const loginValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "Bad Request", success: false, error });
  }

  next();
};
