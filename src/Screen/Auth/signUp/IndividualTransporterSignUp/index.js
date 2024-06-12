import React, { useEffect, useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "../../../../Component/CustomDropDown";
import { useDispatch, useSelector } from "react-redux";
import { IndividualTransporterSignUpApi } from "../../../../api/IndividualTransporterSignUpSlice";
import { GetGenderType } from "../../../../api/GetGenderSlice";

const IndividualTransporterSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '' 
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

  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      gender
    });
    if (errors.gender) {
      setErrors({
        ...errors,
        gender: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'This field is required';
    if (!formData.lastName) newErrors.lastName = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';
    if (!formData.gender) newErrors.gender = 'This field is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', formData);

      const data = {
      
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        genderId: formData.gender
      };

      try {
        const response = await dispatch(IndividualTransporterSignUpApi(data));
        
        if (response.meta.requestStatus === 'fulfilled') {
          console.log('Signup successful:', response.payload);
          navigate('/'); // Example navigation after successful signup
        } else {
          console.error('Signup failed:', response.error);
          setErrors({ apiError: 'Signup failed. Please try again.' });
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setErrors({ apiError: 'An unexpected error occurred. Please try again later.' });
      }
    }
  };
  useEffect(() => {
   
    dispatch(GetGenderType());
  }, []);
  const GetGender = useSelector((state) => state.GetGender.list);

const options = GetGender.map((item) => ({
  id: item.genderId,
  label: item.genderName
}));

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
                <CustomDropDown 
                  options={options}
                  value={formData.gender}
                  onChange={handleGenderChange}
                  error={errors.gender}
                />
                <InputField
                  required
                  label="First Name"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <InputField
                  required
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
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
                  label="Phone"
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
