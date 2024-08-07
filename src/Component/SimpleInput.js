import React from "react";
import "./componentCommonStyle.scss";

const SimpleInput = ({ type = "text", placeholder, value, onChange, label, required, name ,maxLength}) => {
  return (
    <div className="SimpleInput-input">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="SimpleInput"
        required={required}
        name={name}
        maxLength={maxLength}
      />
    </div>
  );
};

export default SimpleInput;
