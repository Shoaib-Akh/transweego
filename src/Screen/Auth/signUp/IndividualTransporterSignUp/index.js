import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "../../../../Component/CustomDropDown";
import AuthLayout from "../../../../layout/AuthLayout";
import CustomCheckbox from "../../../../Component/CustomCheckbox";
import UploadItem from "../../../../Component/UploadItem";
import { Images } from "../../../../utils/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IndividualTransporterSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    website: '',
    street: '',
    postalCode: '',
    birthDate: '',
    nationality: '',
    documents: [],
    parcelsOption: ''
  });

  const [errors, setErrors] = useState({});
  const [checkedTerms, setCheckedTerms] = useState(false);

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

  const handleCheckboxChange = () => {
    setCheckedTerms(!checkedTerms);
  };

  const handleImageUpload = (image) => {
    setFormData({
      ...formData,
      documents: [...formData.documents, image]
    });
  };

  const handleImageRemove = (image) => {
    setFormData({
      ...formData,
      documents: formData.documents.filter(doc => doc !== image)
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthDate: date
    });
    if (errors.birthDate) {
      setErrors({
        ...errors,
        birthDate: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'This field is required';
    if (!formData.lastName) newErrors.lastName = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.phone) newErrors.phone = 'This field is required';
    if (!formData.gender) newErrors.gender = 'This field is required';

    if (!formData.birthDate || new Date(formData.birthDate) >= new Date()) {
      newErrors.birthDate = 'Please enter a valid birth date';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted with values:', formData);
      navigate('/Add-vehicles', { state: { formData } });
    }
  };
 
  const options = [
    { id: '1', label: 'Male' },
    { id: '2', label: 'Female' },
    { id: '3', label: 'Trans*woman' },
    { id: '3', label: 'Trans*male' },
    { id: '3', label: 'Non-binary' },
    { id: '3', label: 'Other' },


  ];
  const optionsNationality = [
    { id: '1', label: 'Swiss' },
    { id: '2', label: 'German' },
    { id: '3', label: 'Austrian' }
  ];
  const UploadDocumentsOption = [
    { id: '1', label: 'ID' },
    { id: '2', label: 'passport' },
    { id: '3', label: "Driver's license"}
  ];
  
  
  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <div className="login-div">
            <div className="text-center mb-4 heading">
              <h2>Individual Transporter </h2>
            </div>
            <div className="input-bg">
              <CustomDropDown
                options={options}
                value={formData.gender}
                onChange={handleGenderChange}
                error={errors.gender}
                label={"Gender"}
                placeholder={"Gender"}
                heading={"Gender"}
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
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                required
                validationMessages={{ email: 'Please enter a valid email address' }}
                error={errors.email}
              />
              <InputField
                type="number"
                placeholder="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                label="Phone"
                maxLength={10}
                required
                validationMessages={{ phone: 'Please enter a valid 10-digit phone number' }}
                error={errors.phone}
              />
              <InputField
                type="text"
                placeholder="Company Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                label="Add Link"
              />
              <div className="row my-2">
                <div className="col-md-6">
                  <InputField
                    type="text"
                    placeholder="Street / No.*"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    label="Street / No.*"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    type="text"
                    placeholder="Postal Code / City*"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    label="Postal Code"
                  />
                </div>
              </div>
              <p className="label ps-3 mt-2">Birth Date*</p>
              <DatePicker
                selected={formData.birthDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                placeholderText="Select your birth date"
                className="form-control"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                name="birthDate"
              />
              {errors.birthDate && <p className="error">{errors.birthDate}</p>}
              <CustomDropDown
                options={optionsNationality}
                value={formData.nationality}
                onChange={(value) => setFormData({ ...formData, nationality: value })}
                error={errors.nationality}
                label={"Nationality"}
                heading={"Nationality"}
                placeholder={"Select Nationality"}
              />
               <UploadItem
                frameImage={Images.frame}
                label="Profile Image"
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
              />
                <CustomDropDown
                options={UploadDocumentsOption}
                value={formData.nationality}
                onChange={(value) => setFormData({ ...formData, nationality: value })}
                error={errors.nationality}
                label={"Upload Documents"}
                heading={"Upload Documents"}
                placeholder={" Upload Documents"}
              />
              <span className="Acceptable">Acceptable  pdf Jpeg, Png</span>
             <div className="d-flex align-items-center justify-content-between">
             <UploadItem
                frameImage={Images.frame}
                label="Front"
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
              />
                <UploadItem
                frameImage={Images.frame}
                label="Back"
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
              />
             </div>


              <Button label={"Continue"} type="submit" onClick={handleSubmit} />
              {/* <Button label={"Reset"} onClick={() => setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                gender: '',
                website: '',
                street: '',
                postalCode: '',
                birthDate: '',
                nationality: '',
                documents: [],
                parcelsOption: ''
              })} /> */}
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default IndividualTransporterSignUp;
