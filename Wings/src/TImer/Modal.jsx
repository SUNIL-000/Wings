import React from "react";

const Modal = ({ ref, msg }) => {
  const hancleClose = () => {
    ref.current.close();
  };
  return (
    <modal>
      <p>{msg}</p>
      <button onClick={hancleClose}></button>
    </modal>
  );
};

export default Modal;
