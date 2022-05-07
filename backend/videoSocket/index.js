const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const { on } = require("events");

const io = require("socket.io")(server,{
    cors:{
        origin: "*",
        methods:[
            "GET","POST"
        ]
    }
});

    app.use(cors());

    app.get("/",(req,res)=>{
        res.send("Server is running");
    })

    io.on("connection",(socket)=>{
        socket.emit("me",socket.id);

        socket.on("disconnect",()=>{
            socket.broadcast.emit("call ended");
        });

        socket.on("call user", ({userToCall, signalData, from, name})=>{
            io.to(userToCall).emit("call user",{signal: signalData, from,name});    
        });

        socket.on("answer call",(data)=>{
            io.to(data).emit("call accepted", data.signal);
        })
    })


const PORT = process.env.PORT||5001;

server.listen(PORT,console.log(`videoSocket is listening on port ${PORT}`));
