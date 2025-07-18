import React from 'react'

import './assets/sidebar.css'

const MainView = ({activeState}) => {
  return (
    <div>
        <h1>Main View</h1>
        <p>Active State: {activeState}</p>
       {

        ()=>{
            if(activeState === "home") {
                return <h2>Welcome to the Home Page</h2>
            }
            else if(activeState === "about") {
                return <h2>About Us</h2>
            }
            else if(activeState === "services") {
                return <h2>Our Services</h2>
            }
            else if(activeState === "contact") {    
                return <h2>Contact Us</h2>
            }
            else if(activeState === "parent") {
                return <h2>Parent Component</h2>
            }
        }
       }

    </div>
  )
}

export default MainView