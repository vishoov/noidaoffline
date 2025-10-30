const express = require('express')
const app = express();

//cors = cross origin resource sharing 
// 1. setup server with cors
const cors = require('cors');
app.use(cors())


//2. http handshake 
//http module 
const http = require('http');
const server = http.createServer(app);


//3. setup the server for socket
const socket = require("socket.io");

const io = new socket.Server(
    server,
    {
        cors:{
            origin:"*",
            methods:["GET", "POST"]
        }
    }

)

io.on("connection", (socket)=>{
    console.log("a user connected with id ", socket.id)
})




app.get("/", (req, res)=>{
    res.send("Welcome to the chat App")
})  


server.listen(3000, ()=>{
    console.log("Server is live on http://localhost:3000")
})