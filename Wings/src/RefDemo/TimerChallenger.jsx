import React, { useRef, useState } from "react";

const TimerChallenger = ({ title, totalTime }) => {
  const timer = useRef();
  const [timerStarted, setTimerStared] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const hanldeStart = () => {
    setTimeout(() => {
      setTimeExpired(true);
    }, totalTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <div>
      <h1>{title}</h1>
      {timeExpired && <p>You lost</p>}
      {!timeExpired && <p>Time running</p>}
      <button onClick={timeExpired ? handleStop : hanldeStart}>
        {timeExpired ? "Start" : "Stop"}
      </button>
    </div>
  );
};

export default TimerChallenger;
