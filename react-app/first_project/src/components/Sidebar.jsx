import React from 'react'
import '../assets/sidebar.css'
const Sidebar = ({currentActive, onUpdateState}) => {

    const handleItem = (itemId)=>{
        console.log("HandleItem button clicked")
        onUpdateState(itemId)
        console.log("Active State " + currentActive);
        console.log("Clicked item:", itemId);
    }

    const sidebarItems = [
       {
        id:'home', label:"Home"
       } ,
       {
        id:'about', label:"About"
       },
       {
        id:'services', label:"Services"
       },
       {
        id:"contact", label:"Contact"
       
    },{
        id:"parent", label:"Parent"
       },
       {
        id:"child2", label:"Child 2"
       },
       {
        id:"child3", label:"Child 3"
       },
       {
        id:"child4", label:"Child 4"
    }
    ]

  return (
    <div>
        <h1>Sidebar</h1>
        {sidebarItems.map((item) => {
            return (
                <button
                key={item.id}
                
                style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px", margin:"5px"}}
                onClick={() => {handleItem(item.id)}}
                >
                    {item.label}
                </button>
            );
        })}
    </div>
  )
}

export default Sidebar