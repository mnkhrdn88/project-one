import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/schemas/Player.js";
import { Tanks } from "./db/schemas/Tanks.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB холбогдлоо");
  })
  .catch((e) => {
    console.error("MongoDB холбогдох үед алдаа гарлаа", e);
  });

const app = express();
app.use(express.json());

app.post("/tanks", async (req, res) => {
  try {
    await Tanks.create({
      NameModel: "Tiger1",
      Weight: "55tonn",
      Speed: "45km",
      Turretsize: "88mm",
      Origin: "Germany",
    });
    res.send("Tanks амжилттай нэмэгдлээ");
  } catch (error) {
    res.status(500).send("Алдаа гарлаа: " + error.message);
  }
});

app.post("/players", async (req, res) => {
  try {
    await Player.create({ firstName: "BAT", lastName: "Dorj", age: 16 });
    res.send("Player амжилттай нэмэгдлээ");
  } catch (error) {
    res.status(500).send("Алдаа гарлаа: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
