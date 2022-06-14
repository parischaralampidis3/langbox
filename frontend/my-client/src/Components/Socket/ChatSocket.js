

import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function ChatSocket() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <div className="container mx-auto">

      <div>
        <h1 className="text-center items-center mt-12   text-2xl text-gray-700 ">Lang chat</h1>
      </div>

      
      <div className="">

      <div className="text-center pb-8 bg-blue-100  ">

      <input className=" mt-12 pl-2 w-3/4 h-8 rounded-md shadow-lg"
        placeholder="Type the room number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />

      <div>
        <button className="bg-green-300 mt-4 shadow-md font-semibold p-2 hover:bg-green-500" onClick={joinRoom}> Join Room</button>
      </div>

      </div>

      

      <div className="text-center pb-8 bg-blue-100 mt-12">

     <input className="mt-12 pl-2 w-3/4 h-8 rounded-md shadow-lg"
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />

        <div>
        <button className="bg-blue-400 mt-4  p-2 text-white shadow-md hover:bg-blue-500 " onClick={sendMessage}> Send Message</button>
        </div>


      </div>


 
      
    <div className="p-24  mt-6 bg-white ">
            {messageReceived}
     </div>
      
 
      </div>
    </div>
  );
}

export default ChatSocket;