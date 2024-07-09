import React, { useEffect, useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "../../../../Component/CustomDropDown";
import AuthLayout from "../../../../layout/AuthLayout";
import CustomCheckbox from "../../../../Component/CustomCheckbox";
import UploadItem from "../../../../Component/UploadItem";
import { Images } from "../../../../utils/images";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fetchData, { FetchData, firstLetterCapital, formatOptions } from "../../../../utils/commonFunction";
import { BASE_URL } from "../../../../config/app";

const IndividualSignUp = () => {
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

  const handleSubmit = async (e) => {
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
      // const data = new FormData();
      // data.append("firstName", formData.companyName);
      // data.append("lastName", formData.contactPerson);
      // data.append("password", formData.email);
      // data.append("email", formData.phone);
      // data.append("phoneNumber", formData.vatNumber);
      // data.append("genderID", formData.password);
      // data.append('website', formData.checkedInsured);
      // data.append('street', formData.companyLogo);
      // data.append('zipCode', formData.companyDocuments);
      // data.append("dateOfBirth", formData.additionalInfo);
      // data.append("nationalityID", formData.checkedInsured);
      // data.append("languageID", formData.checkedInsured);
      // data.append("userTypeID", formData.checkedInsured);
      // data.append("image", formData.checkedInsured);
      // data.append("documentTypeID", formData.checkedInsured);
      // data.append("documentBack", formData.checkedInsured);
      // data.append("documentFront", formData.checkedInsured);

      // const requestOptions = {
      //   method: "POST",
      //   body: data,
      //   redirect: "follow",
      // };

      // try {
      //   const response = await fetch(`${BASE_URL}user`, requestOptions);
      //   if (!response.ok) {
      //     throw new Error('Error creating user. Please try again.');
      //   }
      //   const result = await response.json();
      //   toast.success('User registered successfully!');
      // } catch (error) {
      //   toast.error(error.message);
      // }

      // No need to navigate as individual doesn't have this screen on Figma App prototype
      // navigate('/individual-add-vehicles', { state: { formData } });
    }
  };
  const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      FetchData(url, setData);
    }, [url]);

    return data;
  };

  const useFetchAndFormatOptions = (url, idKey, nameKey) => {
    const data = useFetchData(url);
    return data ? formatOptions(data.data, idKey, nameKey) : null;
  };

  // Gender options
  const genderOption = useFetchAndFormatOptions('genders', 'genderID', 'genderName');

  // Document types options
  const documentTypesOption = useFetchAndFormatOptions('document-types', 'documentTypeID', 'documentTypeName');

  // Nationalities options
  const nationalityOption = useFetchAndFormatOptions('nationalities', 'nationalityID', 'nationalityName');




  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <div className="login-div">
            <div className="text-center mb-4 heading">
              <h2>Individual Register</h2>
            </div>
            <div className="input-bg">
              <CustomDropDown
                options={genderOption}
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
                options={nationalityOption}
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
                options={documentTypesOption}
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


              <p className="para">I confirm that all the above information is correct and complete. I agree that this data will be used for registration and use of the app.</p>
              <CustomCheckbox
                checked={checkedTerms}
                onChange={handleCheckboxChange}
                label={"I agree to the terms and conditions."}
              />
              <Button label={"Submit"} type="submit" onClick={handleSubmit} />
              <Button label={"Reset"} onClick={() => setFormData({
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
              })} />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default IndividualSignUp;
