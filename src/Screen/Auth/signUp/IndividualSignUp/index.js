// src/Login.js
import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../../../utils/images";
import MultiSelectDropdown from "../../../../Component/MultiSelectDropdown";
import { useDispatch } from "react-redux";
import {ComponySignUpApi} from "../../../../api/ComponySignUpSlice";
import CustomDropDown from "../../../../Component/CustomDropDown";

const IndividualSignUp = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    // password: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.companyName) newErrors.companyName = 'This field is required';
    // if (!formData.password) newErrors.password = 'This field is required'; 
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', formData);
      e.preventDefault();
      const data={
       
        

       
        
      }
    dispatch(ComponySignUpApi({
      name:  formData.companyName,
      email: formData.email,
      phone:  formData.phone
    } ));

   
    }

  };
  const options = ["Male", "Female", "Trans*Woman", "Trans*Man", "Non-binary", "Other"];
  return (
    <div className="bg-color">
      <div className="mainBg-img">
      <Button
          onClick={() => navigate(-1)}
          style={{
            
          }}
          className="backbtn"
          icon
        />
        <div className="center-div" >
          <div className="bg-company">
            
               <form className="login-div" onSubmit={handleSubmit}>
              <div className="text-center mb-4  heading">
                <h2>Please Register</h2>
              </div>
              <div className="input-bg">
              <CustomDropDown options={options} />
                  <InputField
                  required
                  label="userName"
                  placeholder="userName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                {/* <InputField
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  label="Password"
                  required
                  validationRules={{ minLength: /.{8,}/, hasNumber: /\d/ }}
                  validationMessages={{ minLength: 'Password must be at least 8 characters long', hasNumber: 'Password must contain a number' }}
                  error={errors.password}
                /> */}
                <InputField
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email"
                  required
                  validationMessages={{ email: 'Please enter a valid email address' }}
                  error={errors.email}
                />
                <InputField
                  type="tel"
                  placeholder="Phone number*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Enter number"
                  required
                  validationMessages={{ phone: 'Please enter a valid 10-digit phone number' }}
                  error={errors.phone}
                />
            

{/*                 
                <InputField
                  required
                  lable={"VAT Number"}
                  placeholder={"MwSt. eingeben"}
                />
                <InputField lable={"Firma Website"} placeholder={"Add Link"} />
                <h3>Sind alle meine Fahrzeuge versichert?</h3>
                <div className="d-flex align-items-center gap-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Ja
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Nein
                    </label>
                  </div>
                </div>
                <hr></hr>
                <h2>Upload firma documents*</h2>
                <div className="d-flex gap-3">
                  <div className="upload-photo">
                    <img
                      src={Images.frame}
                      height="52"
                      width="52"
                      alt="car"
                      className="mx-1"
                    />
                  </div>
                  <div className="upload-photo">
                    <img
                      src={Images.frame}
                      height="52"
                      width="52"
                      alt="car"
                      className="mx-1"
                    />
                  </div>
                </div>
                <hr></hr>
                <h2>Will you like to add your Vehicles?</h2>
                <div className="d-flex align-items-center gap-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Ja
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Nein
                    </label>
                  </div>
                </div> */}

                <Button
                  // onClick={() => navigate("/AddDriver")}
                  label={"Submit"}
                />
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSignUp;
