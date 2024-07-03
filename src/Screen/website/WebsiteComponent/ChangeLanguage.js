import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const ChangeLanguage = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: "EN", value: "EN" });

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // onChange(option.value);
  };

  const options = [
    { label: "EN", value: "EN" },
    { label: "DE", value: "DE" },
    { label: "EF", value: "EF" },
    { label: "IT", value: "IT" }
  ];

  return (
    <div className="custom-dropdown">
      <div className='d-flex gap-2'>
        <div className="dropdown-header d-flex align-items-center gap-2" onClick={handleDropdownClick}>
          <div className='change-language' style={{ color: "white" }}>
            {selectedOption.label}
          </div>
          <p className='circle' style={{ color: "white" }}>
            {isOpen ? <KeyboardArrowUpOutlinedIcon/>: <ExpandMoreOutlinedIcon/>}
          </p>
        </div>
        <div className='change-language' style={{ color: "white" }}>
          <PersonOutlineOutlinedIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <div
              className='change-language dropdown-option mt-2'
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <p className='circle'>{option.label}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChangeLanguage;
