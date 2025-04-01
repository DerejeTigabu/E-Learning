import React, { useEffect, useState } from 'react';
//import './UseEffectHook.css'; // Create this CSS file

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [fadeIn, setFadeIn] = useState("");
  
  useEffect(() => {
    // Trigger fade-in animation on count change
    setFadeIn("fadeIn");
    
    // Remove animation class after it completes (500ms matches CSS animation duration)
    const timer = setTimeout(() => {
      setFadeIn("");
    }, 500);
    
    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="effect-container">
      <h1 className='title'>USE EFFECT HOOK DEMO</h1>
      <h2 className='subtitle'>{`You clicked ${count} times`}</h2>
      
      <div className={`card card-warning ${fadeIn}`}>
        <p className="count-display">Current count: {count}</p>
        <button 
          className='btn' 
          onClick={() => setCount(prev => prev + 1)}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}