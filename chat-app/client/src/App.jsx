import React from 'react'
import { useEffect, useState, useMemo } from "react";
import { io } from 'socket.io-client'

const App = () => {

  const socket = useMemo(()=>io("http://localhost:3000"), [])

  const [messages, setMessages] = useState([])
  const [socketId, setsocketId] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    const message = e.target[0].value;
    const reciever = e.target[1].value;
    socket.emit("message", { message, reciever })
  }

  const joinRoom = (e)=>{
    e.preventDefault();
    const room = e.target[0].value;
    socket.emit("join-room", room)
  }

// client -> message (message, recieverId) -> server 
//server -> forward -> client 


  useEffect(()=>{
    socket.on('connect', ()=>{
      setsocketId(socket.id)
      console.log(`Connected with server with id ${socketId}`)
    })
    console.log(socket)
    socket.on('forward', (data)=>{
      setMessages([...messages, data])
    })
  })

  return (
    <div >
      <h3>{socketId}</h3>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your message here' />
        <br/>
        <input type="text" placeholder='Please Enter recievers Id' />
        <button type="submit">Send</button>
      </form>

    <form onSubmit={joinRoom}>
      <input type="text" placeholder='Please enter the room name you want to join' />
      <button type='submit'>Join Room</button>
    </form>

      <ul>
        {messages.map((msg, index)=>{
          return <li key={index}>{msg}</li>
        })}
      </ul>
    </div>
  )
}

export default App