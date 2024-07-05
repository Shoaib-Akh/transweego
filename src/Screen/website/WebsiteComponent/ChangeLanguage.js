import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';
import "../../website/style.scss";

const ChangeLanguage = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState({ label: "EN", value: "EN" });

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setAuth(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleAuthClick = () => {
    setAuth(!auth);
    setIsOpen(false);
  };

  const optionsLanguage = [
    { label: "EN", value: "EN" },
    { label: "DE", value: "DE" },
    { label: "FR", value: "FR" },
    { label: "IT", value: "IT" }
  ];

  const filteredOptions = optionsLanguage.filter(option => option.value !== selectedOption.value);

  return (
    <div className="custom-dropdown">
      <div className='d-flex '>
        {/* Language dropdown */}
        <div className="dropdown-header d-flex align-items-center gap-2" onClick={handleDropdownClick}>
          <div className='change-language' style={{ color: "white" }}>
            {selectedOption.label}
          </div>
          <p className='circle' style={{ color: "white" }}>
            {isOpen ? <KeyboardArrowUpOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </p>
        </div>

        {/* Auth dropdown */}
        <div className=" auth-dropdown-header d-flex align-items-center gap-2" onClick={handleAuthClick}>
          <div className='change-language' style={{ color: "white" }}>
            <PersonOutlineOutlinedIcon />
          </div>
          <p className='circle' style={{ color: "white" }}>
            {auth ? <KeyboardArrowUpOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
          </p>
        </div>
      </div>

      {/* Language dropdown options */}
      {isOpen && (
        <ul className="dropdown-list-change-language">
          {filteredOptions.map((option) => (
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

      {/* Auth options */}
      {auth && (
        <div className="auth-options">
          <p className='p-3 login-option' onClick={() => navigate("/login")}>
            Login
          </p>
          <p className='p-3 signup-option' onClick={() => navigate("/signup")}>
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
