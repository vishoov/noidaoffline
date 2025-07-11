import React, { useState, useEffect } from 'react';
import './Stopwatch.css'; // Assuming you have a CSS file for styling
function Stopwatch() {
  // useState for tracking elapsed time in milliseconds
  const [time, setTime] = useState(0);
  
  // useState for tracking if stopwatch is running
  const [isRunning, setIsRunning] = useState(false);
  
  // useEffect to handle the timer interval
  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10); // Update every 10ms for smooth display
    } else {
      clearInterval(interval);
    }
    
    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, [isRunning]);
  
  // Function to format time for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(2, '0')
    };
  };
  
  const { minutes, seconds, milliseconds } = formatTime(time);
  
  // Event handlers using state setters
  const handleStart = () => {
    setIsRunning(true);
  };
  
  const handleStop = () => {
    setIsRunning(false);
  };
  
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  
  return (
    <div className="stopwatch">
      <h2>React Stopwatch</h2>
      
      {/* Display the formatted time */}
      <div className="time-display">
        <span className="time-unit">{minutes}</span>:
        <span className="time-unit">{seconds}</span>:
        <span className="time-unit">{milliseconds}</span>
      </div>
      
      {/* Control buttons */}
      <div className="controls">
        <button 
          onClick={handleStart} 
          disabled={isRunning}
          className="start-btn"
        >
          Start
        </button>
        
        <button 
          onClick={handleStop} 
          disabled={!isRunning}
          className="stop-btn"
        >
          Stop
        </button>
        
        <button 
          onClick={handleReset}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
      
      {/* Status indicator */}
      <div className="status">
        Status: {isRunning ? 'Running' : 'Stopped'}
      </div>
    </div>
  );
}

export default Stopwatch;
