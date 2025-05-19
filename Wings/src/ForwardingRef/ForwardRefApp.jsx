import React, { useRef } from "react";
import Input from "./Input";

const user = {
  name: "",
  email: "",
};
const ForwardRefApp = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = () => {
    user.name = nameRef.current.value;
    user.email = emailRef.current.value;

    alert(user.name+"--"+user.email);
  };

  return (
    <>
      <Input label={"Enter name"} type="text" ref={nameRef} />
      <Input label={"Enter email"} type="mail"  ref={emailRef} />
      
      <button type="button" onClick={handleSubmit}>
        Show
      </button>

    </>
  );
};

export default ForwardRefApp;
