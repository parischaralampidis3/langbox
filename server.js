const c = require("config");
const express = require ("express");
const connectDB = require( "./config/db" );
const app = express();

connectDB();

app.get("/",( req, res )=>
    res.json({msg:"Welcome to the the Auth API"})
)

//Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

//register route
/*app.get("/register",(req,res)=>{
    res.send("register route is listening")
})

//login route

/*app.get("/login",(req,res)=>{
    res.send("login route is listening")
})*/



const PORT = process.env.PORT||5000;




app.listen (PORT,console.log(`Server is listening on ${PORT}`));