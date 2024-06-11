import React from 'react';
import './comonStyle.scss'; // Assuming the correct import path

const Button = ({ onClick, label, style, disabled, icon, className }) => {
  // Combine default class and custom class using template literals
  const combinedClassName = `custom-button ${className}`;

  return (
    <div className='custom-button-main-div'>
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={combinedClassName} // Apply the combined class name
    >
      {icon} {label}
    </button>
    </div>
  );
};

export default Button;