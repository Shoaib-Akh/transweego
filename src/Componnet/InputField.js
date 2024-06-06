import React, { useState } from "react";
import "./comonStyle.scss";

const InputField = ({ type = "text", placeholder, value, onChange, label, required }) => {
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    // If the input is required, check if it's empty
    if (required && e.target.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }

    // Call the parent onChange handler
    onChange(e);
  };

  return (
    <div className={`maindiv-input ${error ? 'error' : ''}`}>
      <div>
        <p className="label">{label} {required && "*"}</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`input ${error ? 'error-border' : ''}`}
        required={required}
      />
    </div>
  );
};

export default InputField;
