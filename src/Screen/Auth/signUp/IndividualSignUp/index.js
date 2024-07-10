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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateOfBirthInput from "../../../../Component/DateOfBirthInput";
import { FetchData, formatOptions } from "../../../../utils/commonFunction";
import { BASE_URL } from "../../../../config/app";
import { toast } from "react-toastify";

const IndividualSignUp = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const correctedUrl = currentUrl.replace('?/', '?'); // Correct the URL format
  const url = new URL(correctedUrl);
  const queryString = url.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

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
    parcelsOption: '',
    password: "",
    IndividualTransportAddVehiclesId: id,
    profileImage: null,
    frontImage: null,
    backImage: null,
    documentsType: null
  });

  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyDocuments, setCompanyDocuments] = useState([]);
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

  const handleImageUpload = (label, image) => {
    switch (label) {
      case "Profile Image":
        setFormData({ ...formData, profileImage: image });
        break;
      case "Front":
        setFormData({ ...formData, frontImage: image });
        break;
      case "Back":
        setFormData({ ...formData, backImage: image });
        break;
      default:
        break;
    }
  };

  const handleImageRemove = (label) => {
    switch (label) {
      case "Profile Image":
        setFormData({ ...formData, profileImage: null });
        break;
      case "Front":
        setFormData({ ...formData, frontImage: null });
        break;
      case "Back":
        setFormData({ ...formData, backImage: null });
        break;
      default:
        break;
    }
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      e.preventDefault();
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("password", formData.password);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phone);
      data.append("genderID", formData.gender);
      data.append('website', formData.website);
      data.append('street', formData.street);
      data.append('zipCode', formData.postalCode);
      data.append("dateOfBirth", formData.birthDate);
      data.append("nationalityID", formData.nationality);
      data.append("languageID", 1);
      data.append("userTypeID", formData.IndividualTransportAddVehiclesId);
      data.append("image", formData.profileImage);
      data.append("documentTypeID", formData.documentsType);
      data.append("documentBack", formData.backImage);
      data.append("documentFront", formData.frontImage);

      const requestOptions = {
        method: "POST",
        body: data,
        redirect: "follow",
      };

      try {
        const response = await fetch(`${BASE_URL}user`, requestOptions);
        if (!response.ok) {
          throw new Error('Error creating user. Please try again.');
        }
        await response.json();
        // const result = await response.json();
        // const userID = result.data.userID;

        toast.success('User registered successfully!');
        navigate('/')
      } catch (error) {
        toast.error(error.message);
      }
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
              <h2>Individual</h2>
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
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                required
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
              <DateOfBirthInput
                setBirthDate={handleDateChange}
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
                onImageUpload={(image) => handleImageUpload("Profile Image", image)}
                onImageRemove={(image) => handleImageRemove("Profile Image", image)}
              />

              <CustomDropDown
                options={documentTypesOption}
                value={formData.documentsType}
                onChange={(value) => setFormData({ ...formData, documentsType: value })}
                error={errors.documentsType}
                label={"Upload Documents"}
                heading={"Upload Documents"}
                placeholder={" Upload Documents"}
              />
              <span className="Acceptable">Acceptable pdf, jpeg, png</span>
              <div className="d-flex align-items-center justify-content-between">
                <UploadItem
                  frameImage={Images.frame}
                  label="Front"
                  onImageUpload={(image) => handleImageUpload("Front", image)}
                  onImageRemove={(image) => handleImageRemove("Front", image)}
                />
                <UploadItem
                  frameImage={Images.frame}
                  label="Back"
                  onImageUpload={(image) => handleImageUpload("Back", image)}
                  onImageRemove={(image) => handleImageRemove("Back", image)}
                />
              </div>
              <div className="form-check">
                <CustomCheckbox
                  checked={checkedTerms}
                  onChange={handleCheckboxChange}
                  label="I accept the terms and conditions"
                />
              </div>
              <Button onClick={handleSubmit} className="w-100" label={"Send"}></Button>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default IndividualSignUp;
