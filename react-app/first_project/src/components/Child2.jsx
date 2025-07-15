import React from 'react'

const child2 = ({value, onChange}) => {
    const handleChange = (event) => {
    //    value= event.target.value;
    // onChange(event.target.value);
    onChange(true)
    }
  return (
    <div>child2
        <br />
    {/* <input 
type="text" placeholder="Enter your name"
onChange={handleChange} 
value={value}
/> */}

        {/* <button 
        onClick={handleChange}
        style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
        >
            Option 2
        </button> */}

            <form onSubmit = {handleChange}>
            <input 
            type="text"
            placeholder="Enter your email"

            value={value}
            style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
            />
            <br />
            <input
            type="password"
            placeholder="Enter your password"
            value={value}
            
            style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
            />
            <br />
            <button 
            type="submit"
            style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
            >
                Submit
            </button>
            </form>

    </div>
  )
}

export default child2