import { model, Schema, Types } from "mongoose";

export interface IBlog {
  title: string;
  content: string;
  views: number;
  userId: Types.ObjectId;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Blog = model<IBlog>("Blog", BlogSchema);
