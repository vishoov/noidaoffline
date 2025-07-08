import React from 'react'
import Insider from './insider.jsx'


const Hero = () => {
  return (
    <div>
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2rem' }}>
            Welcome to my portfolio
        </h1>
        <p style={{ textAlign: 'center', color: '#666', fontSize: '1rem' }}>
            This is my first React app
        </p>
        <Insider />
    </div>
  )
}

export default Hero