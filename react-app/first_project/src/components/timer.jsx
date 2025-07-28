import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer component mounted");
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, [seconds]); // Empty dependency array

  return <div>Timer: {seconds} seconds</div>;
}


export default Timer