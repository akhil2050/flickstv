const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    movieTitle: { type: String, required: true, unique: true },
    movieDesc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    movieTrailer: { type: String },
    video: { type: String },
    year: { type: String },
    ageLimit: { type: Number },
    genre: { type: String },
    duration: {type: String},
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
