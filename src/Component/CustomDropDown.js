import React, { useState } from "react";
import "./comonStyle.scss";
import { Images } from "../utils/images";

const CustomDropDown = ({ label, placeholder, required ,options}) => {

  const [selectedGender, setSelectedGender] = useState("");
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  const toggleGenderDropdown = () => {
    setIsGenderOpen(!isGenderOpen);
  };
  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setIsGenderOpen(false);
  };

  const handleContinue = () => {

    console.log("Selected gender:", selectedGender);
   
    setIsGenderOpen(false);
  };

  return (
    <>
      

      <div className="maindiv-dropdown" style={{ position: "relative", marginBottom:10 }}>
        <div onClick={toggleGenderDropdown}>
          <p className="label">
            Gender {required && "*"}
          </p>
          <input className="dropdown" placeholder="Select gender" readOnly value={selectedGender} />
        </div>

        {isGenderOpen && (
          <div className="card dropdown-isOpen py-2" style={{ position: "absolute", right: 0, top: 56 }}>
            <div className="card-inner px-3">
              <h5 style={{ fontSize: 15 }}>Genders</h5>
              <img src={Images.arrowDown} alt="arrowDown" />
            </div>
            {options.map((gender, index) => (
              <div className="card-inner px-3" key={index} onClick={() => handleGenderClick(gender)}>
                <p>{gender}</p>
                {selectedGender === gender && <img src={Images.tick} height="10" width="10" alt="tick" />}
              </div>
            ))}
            <div className="line"></div>
            <div className="d-flex justify-content-between align-items-center mx-3 my-1">
              <p className="text" onClick={() => setIsGenderOpen(false)}>cancel</p>
              <div className="lineleft"></div>
              <p className="text" style={{ color: "#FF8900" }} onClick={handleContinue}>continue</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomDropDown;
