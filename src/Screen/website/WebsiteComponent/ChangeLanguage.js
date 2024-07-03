import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useNavigate } from 'react-router-dom';

const ChangeLanguage = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const Navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState({ label: "EN", value: "EN" });

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setAuth(false)
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
    { label: "EF", value: "EF" },
    { label: "IT", value: "IT" }
  ];

  return (
    <div className="custom-dropdown">
      <div className='d-flex gap-2'>
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
        <div className="dropdown-header d-flex align-items-center gap-2" onClick={handleAuthClick}>
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
        <ul className="dropdown-list">
          {optionsLanguage.map((option) => (
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
        <div className="auth-options" style={{display:"flex",alignItems:"center", gap:"20px", marginTop:"30px"}}>
          <p className='p-3' style={{ backgroundColor: "#ff8600",borderRadius:10, }} onClick={() => Navigate("/login")}>
            Login
          </p>
          <p className='p-3' style={{ backgroundColor: "#ffcf00",borderRadius:10, }} onClick={() => Navigate("/signup")}>
            Sign Up
          </p>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
