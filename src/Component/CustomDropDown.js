import React, { useState } from "react";
import "./componentCommonStyle.scss";
import { Images } from "../utils/images";

const CustomDropDown = ({ options, value, onChange, error ,label,placeholder,heading,yes,no}) => {
  const [selectedGender, setSelectedGender] = useState(value);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  const toggleGenderDropdown = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender.label);
    onChange(gender.id); 
    setIsGenderOpen(false);
  };

  return (
    <>
    <div className="maindiv-dropdown mt-2">
      <div onClick={toggleGenderDropdown}>
        <p className="label">
        {label}
        </p>
        <input className="dropdown" placeholder={placeholder} readOnly value={selectedGender} />
      
      </div>

      {isGenderOpen && (
        <div className="card dropdown-isOpen py-2">
          <div className="card-inner px-3">
            <h5>{heading}</h5>
            <img src={Images.arrowDown} alt="arrowDown" />
          </div>
          {options.map((gender, index) => (
            <div className="card-inner px-3" key={index} onClick={() => handleGenderClick(gender)}>
              <p>{gender.label}</p>
              {selectedGender === gender.label && <img src={Images.tick} height="10" width="10" alt="tick" />}
            </div>
          ))}
          <div className="line"></div>
          <div className="d-flex justify-content-between align-items-center mx-3 my-1">
            <p className="text" onClick={() => setIsGenderOpen(false)}>Cancel</p>
            <div className="lineleft"></div>
            <p className="text" style={{ color: "#FF8900" }} onClick={() => setIsGenderOpen(false)}>Continue</p>
          </div>
        </div>
      )}
    </div>
    {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default CustomDropDown;