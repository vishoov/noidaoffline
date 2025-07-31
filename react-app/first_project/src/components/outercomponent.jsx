import React from 'react'
import { useState } from 'react'
import Game from './Game.jsx'

const Outer = () => {
    const [game, setGame] = useState(false);
    const [time, setTime] = useState(null);

    const updateTime = (time)=>{
        setTime(time)
    }

  return (
    <div>


        <button onClick={()=>setGame(true)}>Start Game</button>
        <button onClick={()=>setGame(false)}>Stop Game</button>

        <h1>Outer Component</h1>
        {!game&&
        <p>Time Taken : {time}</p>}
        <p>Game Status: {game ? "Running" : "Stopped"}</p>

        {game && <Game updateTime={updateTime}/>}
    </div>
  )
}

export default Outer