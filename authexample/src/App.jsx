
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import RequireAuth from './Route/RequireAuth'
import Dashboard from './Dashboard'

function App() {


  return (
    <Routes>
     <Route path='/login' element={<Login />} />

     <Route element={<RequireAuth />}>
      <Route element={<Dashboard />} path='/' />
      {/* <Route element={<Profile />} path='/profile' /> */}
     </Route>

    </Routes>
  )
}

export default App
