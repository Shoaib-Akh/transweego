import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Componnet/InputField";
import Button from "../../../../Componnet/Button";
import { useNavigate } from "react-router-dom";

const IndividualSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    password: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

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
    if (!formData.password) newErrors.password = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle the submission
      console.log('Form submitted with values:', formData);
      // Perform the navigation or form submission logic here
    }
  };

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <div className="center-div" style={{ height: "auto" }}>
          <div className="bg-company">
            <form className="login-div" onSubmit={handleSubmit}>
              <div className="text-center mb-4">
                <h2>Please Register</h2>
              </div>
              <div className="input-bg">
                <InputField
                  required
                  label="Firma/Unternehmen"
                  placeholder="Unternehmen Name eingeben"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                <InputField
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
                  placeholder="Nummer eingeben"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Telefonnummer"
                  required
                  validationMessages={{ phone: 'Please enter a valid 10-digit phone number' }}
                  error={errors.phone}
                />
                <Button type="submit" label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSignUp;
