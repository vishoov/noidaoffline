
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import RequireAuth from './Route/RequireAuth'
import Dashboard from './Dashboard'
import Project from './Project'
import SmartCounter from './SmartCounter'


function App() {


  // return (
  //   <Routes>
  //    <Route path='/login' element={<Login />} />

  //    <Route element={<RequireAuth />}>
  //     <Route element={<Dashboard />} path='/' />
  //     <Route path='/project/:variable' element={<Project />} />
  //     {/* <Route element={<Profile />} path='/profile' /> */}
  //    </Route>

  //   </Routes>
  // )

  return (
    <div className='App'>
      <SmartCounter />
    </div>
  )
}

export default App
