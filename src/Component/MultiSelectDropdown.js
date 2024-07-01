import React, { useState } from "react";
import "./componentCommonStyle.scss";
import { Images } from "../utils/images";

const MultiSelectDropdown = ({ label, placeholder, required, options, error, onChange,Heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    let newSelectedOptions;
    if (selectedOptions.includes(option.id)) {
      newSelectedOptions = selectedOptions.filter((item) => item !== option.id);
    } else {
      newSelectedOptions = [...selectedOptions, option.id];
    }
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  const handleContinue = () => {
    console.log("Selected options:", selectedOptions);
    setIsOpen(false);
  };

  return (
    <>
    <div className="maindiv-dropdown" style={{}}>
      <div onClick={toggleDropdown}>
        <p className="label">
          {label} {required && "*"}
        </p>
        <input
          className={`dropdown ${error ? 'dropdown-error' : ''}`}
          placeholder={placeholder}
          readOnly
          value={options.filter(option => selectedOptions.includes(option.id)).map(option => option.label).join(", ")}
        />
      </div>

      {isOpen && (
        <div className="card dropdown-isOpen py-2"  onClick={toggleDropdown}>
          <div className="card-inner px-3">
            <h5>{Heading}</h5>
            <img src={Images.arrowDown} alt="arrowDown" />
          </div>
          {options.map((option, index) => (
            <div className="card-inner px-3" key={index} onClick={() => handleOptionClick(option)}>
              <p>{option.label}</p>
              {selectedOptions.includes(option.id) && <img src={Images.tick} height="10" width="10" alt="tick" />}
            </div>
          ))}
          <div className="line"></div>
          <div className="d-flex justify-content-between align-items-center mx-3 my-1">
            <p className="text" onClick={() => setIsOpen(false)}>Cancel</p>
            <div className="lineleft"></div>
            <p className="text" style={{ color: "#FF8900" }} onClick={handleContinue}>Continue</p>
          </div>
        </div>
      )}
     
    </div>
    {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default MultiSelectDropdown;
