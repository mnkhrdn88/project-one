import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/schemas/Player.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("mongo connected");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.post("/", async (req, res) => {
  await Player.create({ firstName: "BAT", lastName: "Dorj", age: 16 });

  res.send("success");
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
