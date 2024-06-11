import React, { useState } from "react";
import "./comonStyle.scss";
import { Images } from "../utils/images";

const MultiSelectDropdown = ({ label, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Freight transportation", "Towing service", "Other service","Vehicle transportation","Animal transportation","General Transportation"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
   
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleContinue = () => {
    console.log("Selected options:", selectedOptions);
   
    setIsOpen(false);
  };

  return (
    <>
      <div className="maindiv-dropdown" style={{ position: "relative" }}>
        <div onClick={toggleDropdown} >
          <p className="label">
            {label} {required && "*"}
          </p>
        <input className="dropdown" placeholder={placeholder} readOnly value={selectedOptions.join(", ")} />
        </div>
    

      {isOpen && (
        <div className="card dropdown-isOpen py-2" style={{ position: "absolute", right: 0 ,    top: 56,}}>
          <div className="card-inner px-3">
            <h5 style={{ fontSize: 15 }}>Services</h5>
            <img src={Images.arrowDown} alt="arrowDown" />
          </div>
          {options.map((option, index) => (
            <div className="card-inner px-3" key={index} onClick={() => handleOptionClick(option)}>
              <p>{option}</p>
              {selectedOptions.includes(option) && <img src={Images.tick} height="10" width="10" alt="tick" />}
            </div>
          ))}
          <div className="line"></div>
          <div className="d-flex justify-content-between align-items-center mx-3 my-1">
            <p className="text" onClick={() => setIsOpen(false)}>cancel</p>
            <div className="lineleft"></div>
            <p className="text" style={{ color: "#FF8900" }} onClick={handleContinue}>continue</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MultiSelectDropdown;
