const express = require("express");
const router = express.Router();
const crypto = require("crypto")
const { body, validationResult } = require('express-validator');
//const bcrypt = require("brypt");
const sendEmail = require("../utils/sendEmail");
const { User } = require("../models/User");
const PasswordReset = require("../models/PasswordReset");


//send password link

router.post('/', [
    body("email", "Please include a valid email").isEmail(),
    body("password", "Please enter a password with 6 or more character").isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //destructure email 
        const { email, userId } = req.body;
        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ msg: 'User not found, invalid request' });
            }

            let passwordReset = await PasswordReset.findOne({ userId });

            //if token doesn't exist create a new Token

            if (!passwordReset) {
                passwordReset = await new PasswordReset({
                    userId: user.id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()
            }
            const url = `${process.env.BASE_URL}password-reset/${user.id}/${token.token}`;

            //set sendemail method

            await sendEmail(user.email, "Password Reset", url);
            res.status(200).json({ msg: "password reset link is sent to your email account " })

        } catch (err) {
            console.log(err.message);
            res.status(500).send('server error');
        }
    }
)
//verify url
router.get("/:id/:token", async (req, res) => {
    try {

    } catch (err) {

    }
})

module.exports = router;



