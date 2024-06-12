import React from 'react';
import './componentCommonStyle.scss'; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from '@mui/material/CircularProgress'; // Assuming Material-UI for CircularProgress

const Button = ({ onClick, label, style, disabled, icon, className, loading }) => {
  const combinedClassName = `custom-button ${className}`;

  return (
    <div className='custom-button-main-div'>
      <button
        onClick={onClick}
        style={style}
        disabled={disabled || loading} // Disable button when loading
        className={combinedClassName} 
      >
        {loading ? (
          <CircularProgress size={24} /> // Size of CircularProgress spinner
        ) : (
          <>
            {icon && <ArrowBackIcon />} {label}
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
