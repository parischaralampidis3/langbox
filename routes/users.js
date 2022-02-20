
const express = require( "express" );
const router = express.Router();

 //@route  POST api/users
 //@description Register a user
 //@access  Public

router.post('/', ( req,res ) =>{
    try{
        res.send ( "Register a user" );
    }catch( err ){
        console.log( err.msg )
        res.status(500).json( "server error" )
    }
})

module.exports = router;
