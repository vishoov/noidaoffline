import React from 'react'
import { useState, useEffect } from 'react'
const Game = ({updateTime}) => {
    const [timer, setTimer] = useState(0);

    const update= (timer)=>{
        updateTime(timer);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer((prev)=>{
                let newTime = prev+1;
                update(newTime);
                return newTime;
            })
        }, 1000);

      return(()=>{
          clearInterval(interval);

      })
    }, []) 

  return (
    <>
    <div>Game</div>
    <h2>Timer: {timer}</h2>
</>
  )
}

export default Game