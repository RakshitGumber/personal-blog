import { Router } from "express";
import { User } from "../model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { loginValidation, signupValidation } from "../middleware/validator";

export const userRouter = Router();

userRouter.post("/signup", signupValidation, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });
    }
    const usernameTaken = await User.findOne({ username });

    if (usernameTaken) {
      return res
        .status(409)
        .json({ message: "Username already taken", success: false });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error while creating user", success: false });
  }
});

userRouter.post("/login", loginValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res
        .status(404)
        .json({ message: "User email not found", success: false });
    }

    const passwordMatched = await bcrypt.compare(password, userExists.password);

    if (!passwordMatched) {
      return res
        .status(403)
        .json({ message: "email or password incorrect", success: false });
    }

    const token = jwt.sign(
      { email: userExists.email, _id: userExists._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      message: "Login successfully",
      success: true,
      data: {
        token,
        user: { username: userExists.username, _id: userExists._id, email },
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error while creating user", success: false });
  }
});

// userRouter.get("/:id", (req, res) => {});

// userRouter.put("/:id", (req, res) => {});

// userRouter.delete("/:id", (req, res) => {});
