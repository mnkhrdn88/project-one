import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

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

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
