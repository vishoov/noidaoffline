import React, { useState } from 'react';
// import Child from './child.jsx';
import Child2 from './Child2.jsx';

const Parent = () => {
    const [input, setInput] = useState(false);

    const InputChange = (event) => {
        // Ensure the state is set to a primitive value
        setInput(event);
    };

    return (
        <div style={{ height: "200px", backgroundColor: "red", padding: "100px", fontSize: "50px", color: "blue" }}>
            Parent
            <br />
            {/* <p>Current state: {String(input)}</p> */}
            {/* <Child
                onChange={InputChange}
            />
            <Child2
                onChange={InputChange}
            /> */}
            {input ? "Logged In" : (
                <Child2
                    onChange={InputChange}
                />
            )}
        </div>
    );
};

export default Parent;