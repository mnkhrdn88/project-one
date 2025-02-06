import mongoose from "mongoose";

const { Schema } = mongoose;
const playerHobbySchema = new Schema(
  {
    team: String,
    awards: Array,
  },
  { _id: false }
);

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
    validate: {
      message: " Nas 16gaas doosh bh yostoi",
      validator: (data) => {
        return data >= 16;
      },
    },
  },
});

export const Player = mongoose.model("player", playerSchema);
