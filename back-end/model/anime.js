// import mongoose from "mongoose";
// const { Schema, model } = mongoose;
import { Schema, model } from "mongoose";

const animeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: Number,
});

const animeModel = model("anime", animeSchema);

export default animeModel;
