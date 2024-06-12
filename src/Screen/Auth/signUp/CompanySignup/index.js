import React, { useEffect, useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../../../../Component/MultiSelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import { CompanySignupApi } from "../../../../api/ComponySignUpSlice";
import { getServiceTypes } from "../../../../api/getServicesSlice";

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

 
  useEffect(() => {
   
    dispatch(getServiceTypes());
  }, []);
  const serviceTypes = useSelector((state) => state.serviceTypes.list);

const options = serviceTypes.map((item) => ({
  id: item.serviceTypeId,
  label: item.serviceTypeName
}));
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
                <h2>Please Register</h2>
              </div>
              <div className="input-bg">
                <InputField
                  required
                  label="Company/enterprise"
                  placeholder="Enter company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                <InputField
                  required
                  label="Contact person"
                  placeholder="Enter contact person"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  error={errors.contactPerson}
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
                  maxLength={10}
                  label="Enter number"
                  required
                  validationMessages={{ phone: 'Please enter a valid 10-digit phone number' }}
                  error={errors.phone}
                />
                <MultiSelectDropdown
                  label={"Services*"}
                  placeholder={"Select services"}
                  options={options}
                  error={errors.serviceTypeIds}
                  onChange={handleServiceTypeChange}
                />
                <Button
                  label={"Submit"}
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
