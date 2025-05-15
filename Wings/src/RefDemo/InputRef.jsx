import React, { useRef, useState } from "react";

const InputRef = () => {
  const playerName = useRef();

  const [name, setName] = useState();

  function HandleChange() {
    setName(playerName.current.value);
    console.log(playerName.current.value.length);
    console.log(playerName.current.value);
  }
  return (
    <div>
      <h1>{playerName.current ? playerName.current.value : " No value yet"}</h1>
      <input
        ref={playerName}
        onChange={HandleChange}
        type="text"
        name=""
        id=""
        placeholder="name"
      />
    </div>
  );
};

export default InputRef;
