import React, { useRef } from "react";

const FileRef = () => {
  const imageRef = useRef();

  function handleFile() {
    imageRef.current.click();
  }
  return (
    <div>
      <input
        ref={imageRef}
        type="file"
        name=""
        id=""
        placeholder="File"
        style={{ display: "none" }}
      />
      <button onClick={handleFile}>Upload image</button>
    </div>
  );
};

export default FileRef;
