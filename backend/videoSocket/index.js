
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


const {
    addUser,
    removeUser,
    getUser,
    getUsersinRoom,
    getUsersInRoom
}=require("./utils/users");
const { SocketAddress } = require("net");



io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });
//add user with socket id and room info
  io.on("connect", socket =>{
      socket.on('join', ({username, room}, callback =>{
          const{error, user} = addUser ({ id:socket.id, name:username, room});

      }))
  })
//display error
  if (error) return callback(error);



  socket.join(user.room);

  //display message when user enters room
  socket.emit("message", {
      user: 'adminx',
      text: `${user.name.toUpperCase()},'Welcome to ${user.room} room`
  });

io. to(user.room).emit('roomData',{
    room:user.room,
    users: getUsersInRoom(user.room)// get user data based on users.room
})

callback();
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});