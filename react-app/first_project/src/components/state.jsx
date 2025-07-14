import React, {useState} from 'react'



const Hahastate = () => {

    const [count, setCount] = useState(0);
    //const [name=accessor, setName = updaterfunction] =useState(initialValue)

    return (
    <>
        <h1>Count: {count}</h1>
        <button onClick = {()=>setCount(count+1)}>Increment</button>
        <button onClick = {()=>setCount(count-1)}>Decrement</button>
        <button onClick = {()=>setCount(0)}>Reset</button>

    </>
  )
}

export default Hahastate