import React, { useState } from 'react';

const ChangeLanguage = ({ placeholder,  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("en");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    // onChange(option.value);
  };

  const options = [
    {
      label: "de",
      value: "de"
    },
    {
      label: "en",
      value: "en"
    },
    {
      label: "ch",
      value: "ch"
    }
  ];

  return (
    <div className="custom-dropdown" >
      <div className="dropdown-header d-flex align-items-center gap-2" onClick={handleDropdownClick}>
        <div className='change-language' style={{ color: "white" }}>
          {selectedOption}
        </div>
        <p className='circle' style={{ color: "white" }}> {isOpen ? '▲' : '▼'}</p>
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
