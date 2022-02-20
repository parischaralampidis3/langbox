const express = require( "express" );
const router = express.Router();

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

router.post("/", ( req,res ) =>{
    try{
        res.send( "log in user" )
    }catch(err){
        res.status(500).json( "server error" )
    }
})

module.exports = router;