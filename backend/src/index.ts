import Express from "express";
import { config } from "dotenv";

config();

const app = Express();

app.get("/", (req, res) => {
  res.send("Hello from the Server.");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started\nhttp://localhost:${process.env.PORT}`);
});
