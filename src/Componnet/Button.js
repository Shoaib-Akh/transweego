import React from 'react';
import "./comonStyle.scss";

const Button = ({ onClick, label, style, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className="custom-button"
    >
      {label}
    </button>
  );
};

export default Button;