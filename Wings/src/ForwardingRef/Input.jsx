import React ,{forwardRef} from "react";

const Input = forwardRef(({label,...props},ref) => {
  return <>
    <label >{label}</label>
    <input  {...props} required={true} ref={ref}/>
    <br />
  </>;
});

export default Input;
