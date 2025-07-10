import React from 'react'

const Header = ({info, name}) => {
return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
        {/* <h1 style={{ color: '#333', fontSize: '2rem' }}>Welcome to my portfolio</h1>
        <p style={{ color: '#666', fontSize: '1rem' }}>This is my first React app</p>
        <p style={{ color: '#999', fontSize: '0.8rem' }}>{info}</p>
        <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />
        <h1>{name}</h1> */}
        {(name==="Accio")?(
            <h1 style={{ color: '#333', fontSize: '2rem' }}>Welcome to my portfolio</h1>
        ):(
            <h1 style={{ color: '#333', fontSize: '2rem' }}>You are not welcome</h1>
        )}
    </div>


)
}

export default Header