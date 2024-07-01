// CustomCheckbox.js
import React from 'react';
import './componentCommonStyle.scss';

const CustomCheckbox = ({ checked, onChange ,label}) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={`custom-checkbox ${checked ? 'checked' : ''}`}></span>
      <span className="label-text">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
