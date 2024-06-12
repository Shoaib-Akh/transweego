import React from 'react';
import './componentCommonStyle.scss'; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Button = ({ onClick, label, style, disabled, icon, className }) => {
  const combinedClassName = `custom-button ${className}`;

  return (
    <div className='custom-button-main-div'>
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={combinedClassName} 
    >
      {icon && <ArrowBackIcon/>} {label}
    </button>
    </div>
  );
};

export default Button;