import React, {useState} from 'react'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import Insider from './components/insider.jsx'
import Todo from './components/to-do.jsx'
import MainView from './MainView.jsx'
import Attendance from './components/attendance.jsx'
import Greeting from './components/Greeting.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import Hahastate from './components/state.jsx'
import Sidebar from './components/Sidebar.jsx'
import Parent from './components/parent.jsx'
import UseEffect from './components/newNotes.jsx'
import MouseTracker from './components/mouse.jsx'
import Products from './components/fetchProducts.jsx'
import outercomponent from './components/outercomponent.jsx'
import Timer from './components/timer.jsx'
import Weather from './components/weatherAPI.jsx'
import Outer from './components/outercomponent.jsx'
const App = () => {
  const [active, setActive] =useState("home")
  // const data = [
  //   { id: 1, name: "Aarav" },
  //   { id: 2, name: "Priya" },
  //   { id: 3, name: "Rahul" },
  //   { id: 4, name: "Sneha" },
  //   { id: 5, name: "Rohan" },
  //   { id: 6, name: "Ananya" },
  //   { id: 7, name: "Karan" },
  //   { id: 8, name: "Neha" },
  //   { id: 9, name: "Vikram" },
  //   { id: 10, name: "Sonia" }
  // ]

  const updateActive = (itemName)=>{
    setActive(itemName)
    console.log("Active item updated to:", itemName);
  }

  const userData = {
    name: "Rhythem",
    age: 25,
    city: "Delhi"
  }


  return (
    <>
      <Outer />
      </>
  )
//   return (
//     <div>

// {/* 
//     <Sidebar 
//     currentActive = {active}
//     onUpdateState = {updateActive}
//     /> */}

// {/* <Products /> */}
//     {/* <MainView 
//      activeState = {active}
//     /> */}

// <Outer />





// {/* <Weather /> */}

// {/* <UseEffect /> */}

// {/* <MouseTracker /> */}

// {/* <Timer /> */}

//      {/* <Header info="hello bhai" name="A" /> */}
//      {/* <Stopwatch /> */}
//    {/* <Hero />
//     <Insider /> */}
//    {/* <Todo /> */}
//     {/* <Attendance /> */}
//   {/* {
//     data.map((item)=>{
//       return <Greeting key={item.id} name={item.name} />
//     })
//   } */}
//     {/* <Greeting userData={userData} /> */}
//   {/* <Hahastate />
//  */}
//  {/* <Parent /> */}
//     </div>
//   )
}

export default App