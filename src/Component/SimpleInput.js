import React from "react";
import "./componentCommonStyle.scss";
const SimpleInput = ({ type = "text", placeholder, value, onChange,lable ,required}) => {
  return (
    <div className="SimpleInput-input">
    

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="SimpleInput"
        required={required}

      />
    </div>
  );
};



export default SimpleInput;
