import React from "react";
import "./comonStyle.scss";
const InputField = ({ type = "text", placeholder, value, onChange,lable }) => {
  return (
    <div className="maindiv-input">
      <div>
        <p className="lable">{lable}</p>
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

const styles = {
  mainInput: {},
  input: {
    // padding: '10px',
    // margin: '5px 0',
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "none",
    // width: '100%',
  },
};

export default InputField;
