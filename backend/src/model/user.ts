import { model, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  username: string;
  email: string;
  password: string;
  blogs: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
