import React from "react";

const Modal = ({ ref, msg }) => {
  const hancleClose = () => {
    ref.current.close();
  };
  return (
    <Modal>
      <p>{msg}</p>
      <button onClick={hancleClose}></button>
    </Modal>
  );
};

export default Modal;
