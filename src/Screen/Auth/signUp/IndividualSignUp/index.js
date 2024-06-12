import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "../../../../Component/CustomDropDown";
import { useDispatch } from "react-redux";
import { IndividualSignUpApi } from "../../../../api/IndividualSignUpSlice";

const IndividualSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '' // Initialize gender as an empty string
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
        const response = await dispatch(IndividualSignUpApi(data));
        
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

  const options = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Trans*Woman" },
    { id: 4, label: "Trans*Man" },
    { id: 5, label: "Non-binary" },
    { id: 6, label: "Other" }
  ];

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
                <h2>Bitte registrieren</h2>
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
                  label="Vorname"
                  placeholder="Vorname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <InputField
                  required
                  label="Familienname, Nachname"
                  placeholder="Familienname, Nachname"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <InputField
                  type="email"
                  placeholder="Geben sie ihre E-Mail Adresse ein"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="Email"
                  required
                  validationMessages={{ email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }}
                  error={errors.email}
                />
                <InputField
                  type="tel"
                  placeholder="Telefonnummer*"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  label="Telefon"
                  maxLength={10}
                  required
                  validationMessages={{ phone: 'Bitte geben Sie eine gültige 10-stellige Telefonnummer ein' }}
                  error={errors.phone}
                />
                <Button label={"Einreichen"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSignUp;
