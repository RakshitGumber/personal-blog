import { Router } from "express";
import { verifyUser } from "../middleware/verification";

export const blogRouter = Router();

// Create Post
blogRouter.post("/", (req, res) => {});

// Get Post
blogRouter.get("/:id", (req, res) => {});

blogRouter.get("/", verifyUser, (req, res) => {
  res
    .status(200)
    .json([
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
      { name: "apple" },
    ]);
});

// Update Post
blogRouter.put("/:id", (req, res) => {});

// Like Post
blogRouter.put("/:id", (req, res) => {});

// Delete Post
blogRouter.delete("/:id", (req, res) => {});
