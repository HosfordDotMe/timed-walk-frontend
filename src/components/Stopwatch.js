import React, { useState, useEffect } from 'react';

const Stopwatch = ({ onTimeUpdate }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    onTimeUpdate(seconds);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="card col-md-4">
      <div className="card-body text-center">
        <div>{seconds}</div>
        <div>seconds</div>
        <div className="btn-group" role="group" aria-label="Stopwatch">
          <button type="button" className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
          <button
            type="button"
            className={`btn btn-primary btn-primary-${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={toggle}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
