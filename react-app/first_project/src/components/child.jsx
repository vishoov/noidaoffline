import React from 'react'

const child = ({value, onChange}) => {
    const handleChange = (event) => {
    //    value= event.target.value;
    // onChange(event.target.value);
    onChange("Option 1")
    }
  return (
    <div>child
        <br />
    {/* <input 
type="text" placeholder="Enter your name"
onChange={handleChange} 
value={value}
/> */}

        <button 
        onClick={handleChange}
        style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
        >
            Option 1
        </button>

    </div>
  )
}

export default child