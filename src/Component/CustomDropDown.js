import React, { useState } from "react";
import "./componentCommonStyle.scss";
import { Images } from "../utils/images";

const CustomDropDown = ({ options, value, onChange, error, label, placeholder, heading }) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onChange(option.id, option.label); 
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="maindiv-dropdown mt-2">
        <div onClick={toggleDropdown}>
          <p className="label">{label}</p>
          <input className="dropdown" placeholder={placeholder} readOnly value={selectedOption} />
        </div>

        {isDropdownOpen && (
          <div className="card dropdown-isOpen py-2">
            <div className="card-inner px-3">
              <h5>{heading}</h5>
              <img src={Images.arrowDown} alt="arrowDown" />
            </div>
            {options.map((option, index) => (
              <div className="card-inner px-3" key={index} onClick={() => handleOptionClick(option)}>
                <p>{option.label}</p>
                {selectedOption === option.label && <img src={Images.tick} height="10" width="10" alt="tick" />}
              </div>
            ))}
            <div className="line"></div>
            <div className="d-flex justify-content-between align-items-center mx-3 my-1">
              <p className="text" onClick={() => setIsDropdownOpen(false)}>Cancel</p>
              <div className="lineleft"></div>
              <p className="text" style={{ color: "#FF8900" }} onClick={() => setIsDropdownOpen(false)}>Continue</p>
            </div>
          </div>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default CustomDropDown;
