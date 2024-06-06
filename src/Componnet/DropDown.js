import React from "react";
import "./comonStyle.scss";

const DropDown = ({lable, placeholder, required}) => {
  return (
    <>
        <div className="maindiv-dropdown">
      <div>
    <p className="lable">{lable} {required && "*"}</p>
      </div>

      <input className="dropdown"
       placeholder={placeholder}
     

      />
    </div>
    </>
  );
};

export default DropDown;
