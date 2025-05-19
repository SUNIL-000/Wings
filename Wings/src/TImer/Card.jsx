import React, { useRef, useState } from "react";
import Modal from "./Modal";

const Card = ({ title, time }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState();
  const timeRef = useRef();
  const [msg, setMsg] = useState();
  const modalRef = useRef();

  const handleClick = () => {
    if (isRunning) {
      clearTimeout(timeRef.current);
      modalRef.current?.showDialog();
      setMsg("Times stopped");

      setIsRunning(false);
    } else {
      setIsRunning(true);

      timeRef.current = setTimeout(() => {
        modalRef.current?.showDialog();
        setMsg("Times up");
        setTimeout(true);
        setIsRunning(false);
      }, time * 1000);
    }
  };
  return (
    <div style={{ background: "LightGray", height: "auto", width: "100px" }}>
      <h1>{title}</h1>
      <h2>{time}</h2>
      <h2>{isRunning ? "Time is running" : "Time stopped"}</h2>
      {isTimeOver && <p>Times up </p>}
      <button onClick={handleClick}>{isRunning ? "stop" : "start"}</button>
      <Modal msg={msg} ref={modalRef} />
    </div>
  );
};

export default Card;
