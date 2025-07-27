import { connect } from "mongoose";

const connectDb = async () => {
  await connect(process.env.ATLAS_URL);
};

export default connectDb;
