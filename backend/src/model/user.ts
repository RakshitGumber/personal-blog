import { model, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  username: string;
  email: string;
  password: string;
  blogs: Types.ObjectId[];
  tokens: { token: string }[];
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

UserSchema.methods.verifyPassword = async function (password: string) {
  const user = this;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
};

export const User = model<IUser>("User", UserSchema);
