import React, { useEffect, useState } from 'react';
import './componentCommonStyle.scss';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  required = false,
  error = '',
  name,
  min,
  max,
  validationRules = {},
  validationMessages = {
    email: 'Invalid email format',
    phone: 'Invalid phone number',
    // Add more as needed
  },
  maxLength,
}) => {
  const [localError, setLocalError] = useState(error);

  useEffect(() => {
    setLocalError(error);
  }, [error]);

  const handleBlur = () => {
    if (required && !value) {
      setLocalError('This field is required');
      return;
    }

    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) {
        setLocalError(validationMessages.email || 'Invalid email format');
        return;
      }
    }

    if (type === 'password') {
      for (const rule in validationRules) {
        if (!validationRules[rule].test(value)) {
          setLocalError(validationMessages[rule] || 'Invalid value');
          return;
        }
      }
    }

    if (type === 'tel') {
      const phoneRegex = /^\d{10}$/; 
      if (!phoneRegex.test(value)) {
        setLocalError(validationMessages.phone || 'Invalid phone number');
        return;
      }
    }

    setLocalError('');
  };

  return (
    <>
      <div className={`maindiv-input ${localError ? 'error' : ''}`}>
        <div>
          <p className="label">
            {label} {required && '*'}
          </p>
        </div>
        <input
          maxLength={maxLength}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          className="input"
          required={required}
          name={name}
          min={min}
          max={max}
        />
      </div>
      {localError && <p className="error-message">{localError}</p>}
    </>
  );
};

export default InputField;
