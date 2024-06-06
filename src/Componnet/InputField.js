import React from "react";
import "./comonStyle.scss";
const InputField = ({ type = "text", placeholder, value, onChange,lable ,required}) => {
  return (
    <div className="maindiv-input">
      <div>
        <p className="lable">{lable} {required && "*"}</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
        required={required}

      />
    </div>
  );
};



export default InputField;
