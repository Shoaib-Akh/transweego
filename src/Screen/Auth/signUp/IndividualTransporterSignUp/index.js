// src/Login.js
import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ComponySignUpApi } from "../../../../api/ComponySignUpSlice";
import CustomDropDown from "../../../../Component/CustomDropDown";

const IndividualTransporterSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
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
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', formData);
      dispatch(ComponySignUpApi({
        name: formData.companyName,
        email: formData.email,
        phone: formData.phone
      })).then(() => {
        // navigate("/AddDriver");  // Redirect to another page after successful signup
      }).catch((error) => {
        console.error('Signup failed', error);
      });
    }
  };

  const options = ["Male", "Female", "Trans*Woman", "Trans*Man", "Non-binary", "Other"];

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <Button
          onClick={() => navigate(-1)}
          className="backbtn"
          icon
        />
        <div className="center-div">
          <div className="bg-company">
            <form className="login-div" onSubmit={handleSubmit}>
              <div className="text-center mb-4 heading">
                <h2>Please Register</h2>
              </div>
              <div className="input-bg">
                <CustomDropDown options={options} />
                <InputField
                  required
                  label="Company Name"
                  placeholder="Enter your company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
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
                <Button label={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTransporterSignUp;
