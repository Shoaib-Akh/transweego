
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
import { toast } from "react-toastify";

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
    password: ''
  });

  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyDocuments, setCompanyDocuments] = useState(null);

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
  };

  const handleImageRemove = (label) => {
    if (label === "Company Logo") {
      setCompanyLogo(null);
    } else if (label === "Company Documents") {
      setCompanyDocuments(null);
    }
  };

  const handleNext = () => {
    // Check if all required fields are filled
    if (
      formData.companyName &&
      formData.contactPerson &&
      formData.email &&
      formData.phone &&
      formData.serviceTypeIds.length > 0 &&
      formData.vatNumber &&
      formData.password &&
      companyLogo &&
      companyDocuments
    ) {
      const CompanySignupData = {
        ...formData,
        checkedInsured,
        checkedAddVehicles,
        companyLogo,
        companyDocuments
      };
    navigate("/add-driver", { state: { CompanySignupData } });
    } else {
      // Handle case where not all fields are filled
      toast.error("Please fill in all required fields.");
    }
  };

  const currentUrl = window.location.href;
  const correctedUrl = currentUrl.replace('?/', '?');
  const url = new URL(correctedUrl);
  const queryString = url.search;
  const urlParams = new URLSearchParams(queryString);
  const companyId = urlParams.get('id');

  // Fetch and format service types
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
                required
              />
              <InputField
                label="Contact Person"
                placeholder="Enter contact person"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter contact password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <InputField
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                required
              />
              {serviceTypeOption &&
                <MultiSelectDropdown
                  label="Services"
                  placeholder="Select services"
                  options={serviceTypeOption}
                  onChange={handleServiceTypeChange}
                  required
                />}
              <InputField
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                label="Enter number"
                required
              />
              <InputField
                type="text"
                placeholder="Enter your VAT number"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleChange}
                label="VAT Number"
                required
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

