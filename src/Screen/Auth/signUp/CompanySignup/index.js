import React, { useState, useEffect } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Component/InputField";
import Button from "../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import MultiSelectDropdown from "../../../../Component/MultiSelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getServiceTypes } from "../../../../store/slice/getServicesSlice";
import AuthLayout from "../../../../layout/AuthLayout";
import CustomCheckbox from '../../../../Component/CustomCheckbox';
import { Images } from "../../../../utils/images";
import UploadItem from "../../../../Component/UploadItem";
import fetchData, { FetchData, formatOptions, getUrlParameter } from "../../../../utils/commonFunction";

const CompanySignup = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceTypeIds: [],
    vatNumber: '',
    password:""
  });

  const [checkedInsured, setCheckedInsured] = useState(false); // State for "Are all my vehicles insured?"
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(false); // State for "Would you like to add your vehicles?"
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyDocuments, setCompanyDocuments] = useState(null);
console.log("companyLogo",companyLogo);
  // useEffect(() => {
  //   dispatch(getServiceTypes());
  // }, [dispatch]);

  // const serviceTypes = useSelector((state) => state.serviceTypes.list);

  // const options = serviceTypes.map((item) => ({
  //   id: item.serviceTypeId,
  //   label: item.serviceTypeName
  // }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceTypeChange = (selectedServiceTypes) => {
    setFormData({
      ...formData,
      serviceTypeIds: selectedServiceTypes
    });
  };
  const currentUrl = window.location.href;
  const correctedUrl = currentUrl.replace('?/', '?'); // Correct the URL format
  const url = new URL(correctedUrl);
  const queryString = url.search;
  const urlParams = new URLSearchParams(queryString);
  const companyId = urlParams.get('id');
  const handleCheckboxChange = (name) => {
    if (name === 'insured') {
      setCheckedInsured(!checkedInsured);
    } else if (name === 'addVehicles') {
      setCheckedAddVehicles(!checkedAddVehicles);
    }
  };

  const handleImageUpload = (label, image) => {
   
    if (label === "Company Logo") {
      setCompanyLogo(image);
    } else if (label === "Company Documents") {
      setCompanyDocuments(image);
    }
    console.log(`${label} uploaded:`, image);
  };

  const handleImageRemove = (label) => {
    if (label === "Company Logo") {
      setCompanyLogo(null);
    } else if (label === "Company Documents") {
      setCompanyDocuments(null);
    }
  };

  const handleNext = () => {
    const CompanySignupData = {
      ...formData,
      checkedInsured,
      checkedAddVehicles,
      companyLogo,
      companyDocuments,
      companyId
    };
    // console.log('Form data to be sent to next screen:', data);
    navigate("/add-driver", { state: { CompanySignupData } });
  };
  const [data, setData] = useState(null);
  const useFetchData = (url) => {
  
    useEffect(() => {
      FetchData(url, setData);
    }, [url]);
  
    return data;
  };

  const useFetchAndFormatOptions = (url, idKey, nameKey) => {
    const data = useFetchData(url);
    return data ? formatOptions(data.data, idKey, nameKey) : null;
  };
  
  //  options
  const serviceTypeOption = useFetchAndFormatOptions('company/service-types', 'serviceTypeID', 'serviceTypeName');
  
  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <div className="login-div">
            <div className="text-center mb-4 heading">
              <h2>Company Register</h2>
            </div>
            <div className="input-bg">
              <InputField
                label="Company Name"
                placeholder="Enter company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
              <InputField
                label="Contact Person"
                placeholder="Enter contact person"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
              <InputField
                label="password"
                placeholder="Enter contact password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputField
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
              />
             { serviceTypeOption &&
              <MultiSelectDropdown
                label="Services"
                placeholder="Select services"
                options={serviceTypeOption}
                onChange={handleServiceTypeChange}
              />}
              <InputField
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                label="Enter number"
              />
              <InputField
                type="text"
                placeholder="Enter your VAT number"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleChange}
                label="VAT Number"
              />
              <div className="upload-file-div">
                <p className="label">Are all my vehicles insured?</p>
                <div className="checkbox_div">
                  <CustomCheckbox
                    checked={checkedInsured}
                    onChange={() => handleCheckboxChange('insured')}
                    label="Yes"
                  />
                  <CustomCheckbox
                    checked={!checkedInsured}
                    onChange={() => handleCheckboxChange('insured')}
                    label="No"
                  />
                </div>
                <hr />
                <div className="upload-container">
                  <p>Upload company documents</p>
                </div>
                <div className="upload-items">
                  <UploadItem
                    frameImage={Images.frame}
                    label="Company Logo"
                    onImageUpload={(image) => handleImageUpload("Company Logo", image)}
                    onImageRemove={() => handleImageRemove("Company Logo")}
                  />
                  <UploadItem
                    frameImage={Images.frame}
                    label="Company Documents"
                    onImageUpload={(image) => handleImageUpload("Company Documents", image)}
                    onImageRemove={() => handleImageRemove("Company Documents")}
                  />
                </div>
                {/* <hr />
                <p className="label">Would you like to add your vehicles?</p>
                <div className="checkbox_div">
                  <CustomCheckbox
                    checked={checkedAddVehicles}
                    onChange={() => handleCheckboxChange('addVehicles')}
                    label="Yes"
                  />
                  <CustomCheckbox
                    checked={!checkedAddVehicles}
                    onChange={() => handleCheckboxChange('addVehicles')}
                    label="No"
                  />
                </div> */}
              </div>
              <Button
                label="Next"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default CompanySignup;
