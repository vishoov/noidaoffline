import React from 'react'

const Greeting = ({userData}) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ color: '#333', fontSize: '2rem' }}>Hello, {userData.name}!</h1>
      <p style={{ color: '#666', fontSize: '1rem' }}>You are {userData.age} years old and live in {userData.city}.</p>
    </div>
  )
}

export default Greeting