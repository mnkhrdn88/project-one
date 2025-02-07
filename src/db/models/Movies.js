import mongoose from "mongoose";

import { movieSchema } from "../schemas/moviesSchema.js";

export const Movie = mongoose.model("Movie", movieSchema);
