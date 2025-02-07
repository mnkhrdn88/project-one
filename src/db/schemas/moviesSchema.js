import mongoose from "mongoose";

const { Schema } = mongoose;

export const movieSchema = new Schema({
  plot: { type: String, required: true },

  genres: [{ type: String }],

  runtime: { type: Number },

  rated: { type: String },

  cast: [{ type: String }],

  num_mflix_comments: { type: Number },

  poster: { type: String },

  title: { type: String, required: true },

  fullplot: { type: String },

  languages: [{ type: String }],

  released: { type: Date },

  directors: [{ type: String }],

  writers: [{ type: String }],

  awards: {
    wins: { type: Number, default: 0 },
    nominations: { type: Number, default: 0 },
    text: { type: String },
  },

  lastupdated: { type: String },

  year: { type: Number },

  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number },
  },

  countries: [{ type: String }],

  type: { type: String, enum: ["movie", "series", "documentary"] },

  tomatoes: {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },

    dvd: { type: Date },

    lastUpdated: { type: Date },

    rotten: { type: Number },

    production: { type: String },

    fresh: { type: Number },
  },
});
