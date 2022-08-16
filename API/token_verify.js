const jsonwt = require("jsonwebtoken");
require('dotenv').config();

function token_verify(req, res, next) {

    const inpHeader = req.headers.token;
    console.log(inpHeader)

    if (inpHeader) {

        const authToken = inpHeader.split(" ")[1];

        jsonwt.verify(authToken, process.env.SEC_KEY, (err, user_info) => {
            if (err) {
                return res.status(401).json(err);
            }
            else {
                req.user = user_info;
                next();
            }
        })

    } else {
        return res.status('401').json("invalid user");
    }


}



module.exports = token_verify;