import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log("Mouse moved")
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty array means this effect runs once

  return (
    <div>
      Mouse position: X: {position.x}, Y: {position.y}
    </div>
  );
}

export default MouseTracker;