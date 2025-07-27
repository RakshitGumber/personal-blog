import { Router } from "express";
import { User } from "../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/token";

export const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "email already in use", success: false });
    }

    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
      return res
        .status(400)
        .json({ message: "username already in use", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User registered successfully",
      success: true,
      data: {
        userId: savedUser._id,
      },
    });
  } catch (error) {}
});

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user)
    return res
      .status(400)
      .json({ message: "Invalid username or password", success: false });

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res
      .status(400)
      .json({ message: "Invalid username or password", success: false });

  const token = generateToken({ id: user._id, email: user.email });

  return res
    .status(200)
    .json({ message: "log in successful", success: true, data: { token } });
});

// userRouter.get("/:id", (req, res) => {});

// userRouter.put("/:id", (req, res) => {});

// userRouter.delete("/:id", (req, res) => {});
