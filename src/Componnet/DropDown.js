import React, { useState } from "react";
import "./comonStyle.scss";
import { Images } from "../utils/images";

const DropDown = ({ label, placeholder, required }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="maindiv-dropdown" onClick={toggleDropdown}>
        <div>
          <p className="label">{label} {required && "*"}</p>
        </div>
        <input className="dropdown" placeholder={placeholder} />
      </div>

      {isOpen && (
        <div className="card dropdown py-2">
          <div className="card-inner px-3">
            <p>Weiblich</p>
            <img src={Images.tick} height="4" width="8" alt="tick" />
          </div>
          <div className="card-inner px-3">
            <p>Weiblich</p>
            <img src={Images.tick} height="4" width="8" alt="tick" />
          </div>
          <div className="card-inner px-3">
            <p>Weiblich</p>
            <img src={Images.tick} height="4" width="8" alt="tick" />
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between align-items-center mx-3 my-1">
            <p className="text">ghvhjv</p>
            <div className="lineleft"></div>
            <p className="text">vvsd</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDown;
