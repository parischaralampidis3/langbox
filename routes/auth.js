const express = require( "express" );
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json")
const { body, validationResult } = require('express-validator');


//bring schema 

const User = require( "../models/User" );


 //@route  GET api/users
 //@description GET logged in user
 //@access  Private

router.get("/",( req,res ) =>{
    try{
       res.send( "get logged in user" ) 
    }catch(err){
        res.status(500).json( "Server error" )
    }
});

 //@route  POST api/users
 //@description authenticate the user & get token
 //@access  Public

router.post("/", [
    body("email", 'Please include a valid email').isEmail(),
    body("password", "Password is required").exists()
],

async ( req,res ) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    //destructure user
    const {email, password} = req.body;

    try{
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:"Invalid credentials"});
        }
        
        res.send( "log in user" )
    }catch(err){
        res.status(500).json( "server error" )
    }
})

module.exports = router;