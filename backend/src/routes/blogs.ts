import { Router } from "express";
import { verifyUser } from "../middleware/verification";

export const blogRouter = Router();

// Create Post
blogRouter.post("/", (req, res) => {});

// Get Post
blogRouter.get("/:id", (req, res) => {});

blogRouter.get("/", (req, res) => {});

// Update Post
blogRouter.put("/:id", (req, res) => {});

// Like Post
blogRouter.put("/:id", (req, res) => {});

// Delete Post
blogRouter.delete("/:id", (req, res) => {});
