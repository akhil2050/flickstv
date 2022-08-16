const router = require("express").Router();
const Movie = require("../models/Movie");
const token_verify = require("../token_verify");

/**
 * Get all movies
 */
// router.get("/", token_verify, async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/**
 * Create a movie
 */
// router.post("/", token_verify, async (req, res) => {
router.post("/", async (req, res) => {
  const newMovie = new Movie(req.body);
  console.log("req.body", req.body)

  try {
    const response = await newMovie.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/**
 * Update movie
 */
// router.put("/:id", token_verify, async (req, res) => {
router.put("/:id", async (req, res) => {
  try {
    console.log("movied upd", req.body);
    console.log("movied id", req.params.id);
    const updateMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/**
 * Delete movie
 */
// router.delete("/:id", token_verify, async (req, res) => {
router.delete("/:id", async (req, res) => {  
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json("Movie deleted successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

/**
 * Get single movies
 */
router.get("/search/:id", token_verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * Get scattered movies
 */
router.get("/scattered", token_verify, async (req, res) => {
  const contentType = req.query.type;
  // const contentType = "movies";
  let mov;
  try {
    if (contentType === "series") {
      mov = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      mov = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(mov);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
