import React from 'react'

const ColorCoded= ({category, color}) => {
  return (
    <div 
    style={{
        backgroundColor: color,
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        minWidth: '150px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        {category}
    </div>
  )
}

export default ColorCoded