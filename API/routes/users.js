const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const token_verify = require("../token_verify");

router.put("/:id", token_verify, async (req, res) => {
    console.log('req.params.id', req.params.id)
    console.log('req.user.id', req.user.id)
    if (req.user.isAdmin || req.user.id === req.params.id) {

        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SEC_KEY
            ).toString();
        }

        try {
            console.log(req.body);
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updateUser);
            console.log(req.body);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        return res.status('401').json("Not authorized to update  user profile");

    }
});


router.delete("/:id", async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    const query = req.query.new;
    
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
  
  });

module.exports = router;