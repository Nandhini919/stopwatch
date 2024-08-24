 { useState } from 'react';
 { stopwatch_backend } from 'declarations/stopwatch_backend';

function App() {
   React, { useState, useEffect } from 'react';

  const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
  
    useEffect(() => {
      if (isRunning) {
        const id = setInterval(() => {
          setTime(prevTime => prevTime + 1000); // Increment by 1000 milliseconds (1 second)
        }, 1000);
        setIntervalId(id);
      } else if (intervalId) {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const formatTime = (milliseconds) => {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    };
  
    const startStop = () => {
      setIsRunning(prev => !prev);
    };
  
    const reset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    return (
      <div className="stopwatch">
        <div className="time-display">{formatTime(time)}</div>
        <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };
  
  export default Stopwatch;
   
}
