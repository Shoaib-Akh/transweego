import React from 'react';
import "./comonStyle.scss";

const Button = ({ onClick, label, style, disabled , icon}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className="custom-button"
    >
      { icon} {label}
    </button>
  );
};

export default Button;