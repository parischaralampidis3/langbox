const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');


//bring schema 

const User = require( "../models/User" );

//@route  POST api/users
//@description Register a user
//@access  Public

router.post( '/', [
    body( "username", "Please add username" ).not().isEmpty(),
    body( "email", "Please include a valid email" ).isEmail(),
    body( "password", "Please enter a password with 6 or more character" ).isLength({min:6 })

], (req, res) => {
 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
    } 
    res.send('passed..')
})

module.exports = router;
 