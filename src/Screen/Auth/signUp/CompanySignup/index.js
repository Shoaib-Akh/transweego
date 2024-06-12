import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../../../../Component/MultiSelectDropdown";
import { useDispatch } from "react-redux";
import { CompanySignupApi } from "../../../../api/ComponySignUpSlice";

const CompanySignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceTypeIds: []
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

  const handleServiceTypeChange = (selectedServiceTypes) => {
    setFormData({
      ...formData,
      serviceTypeIds: selectedServiceTypes
    });
    if (errors.serviceTypeIds) {
      setErrors({
        ...errors,
        serviceTypeIds: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.companyName) newErrors.companyName = 'This field is required';
    if (!formData.contactPerson) newErrors.contactPerson = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';
    if (formData.serviceTypeIds.length === 0) newErrors.serviceTypeIds = 'This field is required';

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', formData);

      const data = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        serviceTypeIds: formData.serviceTypeIds.join(',')
      };

      try {
        // Dispatch the API call
        const response = await dispatch(CompanySignupApi(data));
        
        if (response.meta.requestStatus === 'fulfilled') {
          console.log('Signup successful:', response.payload);
          // You can navigate to another page or show a success message here
          navigate('/'); // Example navigation after successful signup
        } else {
          console.error('Signup failed:', response.error);
          // Show an error message to the user
          setErrors({ apiError: 'Signup failed. Please try again.' });
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setErrors({ apiError: 'An unexpected error occurred. Please try again later.' });
      }
    }
  };

  const options = [
    { id: 1, label: "Freight transportation" },
    { id: 2, label: "Towing service" },
    { id: 3, label: "Vehicle transportation" },
    { id: 4, label: "Animal transportation" },
  ];

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <Button
          onClick={() => navigate(-1)}
          style={{}}
          className="backbtn"
          icon
        />
        <div className="center-div">
          <div className="bg-company">
            <form className="login-div" onSubmit={handleSubmit}>
              <div className="text-center mb-4 heading">
                <h2>Bitte Registrieren</h2>
              </div>
              <div className="input-bg">
                <InputField
                  required
                  label="Firma/Unternehmen"
                  placeholder="Geben Sie den Firmennamen ein"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                <InputField
                  required
                  label="Ansprechpartner"
                  placeholder="Ansprechpartner eintragen"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  error={errors.contactPerson}
                />
                <InputField
                  type="email"
                  placeholder="Geben sie ihre E-Mail Adresse ein"
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
                  maxLength={10}
                  label="Nummer eingeben"
                  required
                  validationMessages={{ phone: 'Please enter a valid 10-digit phone number' }}
                  error={errors.phone}
                />
                <MultiSelectDropdown
                  label={"Dienstleistungen*"}
                  placeholder={"Wählen Sie Dienste aus"}
                  options={options}
                  error={errors.serviceTypeIds}
                  onChange={handleServiceTypeChange}
                />
                <Button
                  label={"Einreichen"}
                  type="submit"
                />
                {/* {errors.apiError && (
                  <div className="error-message">{errors.apiError}</div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySignup;
