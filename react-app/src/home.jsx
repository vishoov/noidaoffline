import React, { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

return (
    <>
    <nav className="navbar">
            <h1>My App</h1>
            <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
 
    </>
)
}

export default Home
