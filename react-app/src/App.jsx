import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#61dafb' }}>Welcome to My React App!</h1>
      <p style={{ fontSize: '18px', color: '#fff' }}>
      This is a simple app built with React and Vite. Enjoy exploring!
      </p>
    </div>
    </>
  )
}

export default App
