import React from 'react'

const child2 = ({onChange}) => {
    const handleChange = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        onChange({email, password, status: true});
    }
  return (
    <div>child2
        <br />

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

            
            style={{padding:"10px", fontSize:"20px", backgroundColor:"blue", color:"white", borderRadius:"5px"}}
            />
            <br />
            <input
            type="password"
            placeholder="Enter your password"
            
            
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