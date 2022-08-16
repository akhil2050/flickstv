const router = require("express").Router();
const List = require("../models/List");
const token_verify = require("../token_verify");



//create list

// router.post("/", token_verify, async (req, res) => {
  router.post("/",  async (req, res) => {
    const newMovielist = new List(req.body);
    try {
      const currentlist = await newMovielist.save();
      res.status(201).json(currentlist);
    } catch (err) {
      res.status(500).json(err);
    }
});

//delete list

// router.delete("/:id", token_verify, async (req, res) => {
  router.delete("/:id", async (req, res) => {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("The list is deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
});

//get list

// router.get("/", token_verify, async (req, res) => {
  router.get("/", async (req, res) => {
  const queryType = req.query.type;
  const queryGenre = req.query.genre;
  console.log("inside api",queryType,queryGenre );
  let list = [];
  try {
    if (queryType) {
      if (queryGenre && queryGenre !="Genre") {
        console.log("inside genre");
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: queryType, genre: queryGenre } },
        ]);
      } 
      else if (queryGenre && queryGenre =="Genre") {
        console.log("inside genre");
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: queryType } },
        ]);
      }
      else  {
        console.log("else genre");
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: queryType } },
        ]);
      }
    } else{
      console.log("final else ");
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    console.log("list api",list)
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * Update movie
 */
 router.put("/:id", async (req, res) => {
  try {
    const updateList = await List.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateList);
  } catch (error) {
    res.status(500).json(error.message);
  }
});


module.exports = router;
