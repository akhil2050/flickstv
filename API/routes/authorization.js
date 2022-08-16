const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jsonwt = require("jsonwebtoken");
const token_verify = require("../token_verify")


module.exports = router;

router.post("/register", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    useremail: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


//LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("body email", req.body.email)
    const user = await User.findOne({ useremail: req.body.email });
    console.log(user);
    if (!user)
      res.status(401).json("Incorrect username or password!");
    else {
      //Decrypting the password
      const dec_pwd = CryptoJS.AES.decrypt(user.password, process.env.SEC_KEY);
      const originalPwd = dec_pwd.toString(CryptoJS.enc.Utf8);
      console.log("decpwd", originalPwd)
      console.log("bodypwd", req.body.password)

      if (originalPwd !== req.body.password)
        res.status(402).json("Incorrect username or password!!");
      else {
        const accessTkn = jsonwt.sign({
          id: user._id, isAdmin: user.isAdmin
        },
          process.env.SEC_KEY,
          { expiresIn: "7d" }
        );
        console.log("acces:", accessTkn)
        const { password, ...logininfo } = user._doc;
        res.status(200).json(logininfo.useremail + " " + accessTkn);
      }
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;