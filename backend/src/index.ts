import express from "express";
import { config } from "dotenv";
import connectDb from "./db";
import cors from "cors";
import bodyParser from "body-parser";

config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from the Server.");
});

Promise.all([connectDb()])
  .then(() => {
    console.log("Connected to the Database");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server Started\nhttp://localhost:${process.env.PORT}`);
    });
  });
