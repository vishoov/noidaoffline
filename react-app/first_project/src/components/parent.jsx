import React, {useState} from 'react'
import Child from './child.jsx'
import Child2 from './Child2.jsx'
const parent = () => {
    const [input, setInput] = useState(false)

    const InputChange = (e)=>{
        setInput(e)
    }

return (
    <div style={{ height: "200px", backgroundColor:"red", padding:"100px", fontSize:"50px",color:"blue" }}>parent

    <br />
    <p>Current state: {input}</p>
        {/* <Child
        onChange={InputChange}
        />
        <Child2
        onChange={InputChange}
            /> */}

{ input ? "Logged In" :
        <Child2
        onChange={InputChange}

        />
}
    </div>
)
}

export default parent