import React, { useState, useEffect } from 'react';

const Timer = ({ totalTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (timeLeft === 0) {
      // If time is up, call the onTimeUp function
      onTimeUp();
    } else {
      // Decrease time left every second
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      // Clean up interval on component unmount
      return () => clearInterval(timer);
    }
  }, [timeLeft, onTimeUp]);

  // Format time to display in minutes:seconds format
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <p>Time Left: {formatTime()}</p>
    </div>
  );
};

export default Timer;