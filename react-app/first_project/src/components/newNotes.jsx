import React from 'react'
import { useEffect, useState } from 'react'
//1. import the useEffect hook from React

const newNotes = () => {

    const [loggedin, setLoggedIn] = useState(false)

    const handleClick = (e)=>{
        e.preventDefault();
        console.log("Button clicked");
        setLoggedIn(!loggedin);
    }

    useEffect(()=>{
        console.log("newNotes component mounted")
    }, [])


if(!loggedin){
    return(
        <div>
            <h1>Please log in</h1>
            <button onClick={handleClick}>Log In</button>
        </div>
    )
}
else{
  return (
    <>
    <h1>Welome to you</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}
}

export default newNotes