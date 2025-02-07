import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/models/Player.js";
import { Team } from "./db/models/Team.js";
import { Movie } from "./db/models/Movies.js";

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});

const app = express();

app.post("/movies", async (req, res) => {
  try {
    await Movie.create({
      plot: " Ene kino bol !!!      ",
      genres: "Drama, Action, Thriller",
      runtime: 700,
      rated: "Mash muu",
      title: "Hamgiin muu kino shuu",
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/", async (req, res) => {
  try {
    await Player.create({
      firstName: "AA      ",
      lastName: "dorj",
      team: "67a5e99e200d24c0e93e9fbe",
      age: 16,
      height: 180,
      weight: 80,
      salary: 1000,
      history: [{ team: "lakers", awards: "mvp" }],
      historyObject: { team: "lakers", awards: "mvp" },
      province: "ulaanbatar",
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/team", async (req, res) => {
  try {
    await Team.create({ name: "lakers" });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
});

app.get("/", async (req, res) => {
  const player = await Player.find({ lastName: "dorj" }).populate("team");

  res.send(player);
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
