import { Router } from "express";

export const blogRouter = Router();

// Create Post
blogRouter.post("/", (req, res) => {});

// Get Post
blogRouter.get("/:id", (req, res) => {});

// Update Post
blogRouter.put("/:id", (req, res) => {});

// Like Post
blogRouter.put("/:id", (req, res) => {});

// Delete Post
blogRouter.delete("/:id", (req, res) => {});
