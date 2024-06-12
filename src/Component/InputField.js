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
  validationRules = {},
  validationMessages = {
    email: 'Ungültiges E-Mail-Format',
    phone: 'Ungültige Telefonnummer',
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
      setLocalError('Dieses Feld ist erforderlich');
      return;
    }

    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) {
        setLocalError(validationMessages.email || 'Ungültiges E-Mail-Format');
        return;
      }
    }

    if (type === 'password') {
      for (const rule in validationRules) {
        if (!validationRules[rule].test(value)) {
          setLocalError(validationMessages[rule] || 'Ungültiger Wert');
          return;
        }
      }
    }

    if (type === 'tel') {
      const phoneRegex = /^\d{10}$/; 
      if (!phoneRegex.test(value)) {
        setLocalError(validationMessages.phone || 'Ungültige Telefonnummer');
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
        />
      </div>
      {localError && <p className="error-message">{localError}</p>}
    </>
  );
};

export default InputField;
