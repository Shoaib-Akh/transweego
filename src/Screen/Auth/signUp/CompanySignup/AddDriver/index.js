import React, { useState } from "react";
import "../../../AuthCommon.scss";
import SimpleInput from "../../../../../Component/SimpleInput";
import { Images } from "../../../../../utils/images";
import AuthLayout from "../../../../../layout/AuthLayout";
import UploadItem from "../../../../../Component/UploadItem";
import CustomCheckbox from "../../../../../Component/CustomCheckbox";
import Button from "../../../../../Component/Button";
import { useLocation, useNavigate } from "react-router-dom";
import VerificationModal from "../../../../../Component/Modal/VerificationModal";

import AddVehicleSection from "../../../../../Component/AddVehicleSection";
import CompanySignup from '../index';
import { CompanySignupApi } from "../../../../../store/slice/CompanySignUpSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../../../config/app";
import { toast } from "react-toastify";

const AddDriver = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [verificationOpen, setVerificationOpen] = useState(false);
  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(true);
  const [selectVehicle, setSelectVehicle] = useState([]);
  const [selectTrailer, setSelectTrailer] = useState([]);
  console.log("checkedInsured", checkedInsured);
  const initialVehicleDimensions = {
    weight: "",
    payload: "",
    netWeight: "",
    totalLength: "",
    overallLength: "",
    internalLength: "",
    totalHeight: "",
    insideLength: "",
    insideWidth: "",
    insideHeight: "",
    sillHeight: "",
  };

  const initialVehicle = {
    numberPlate: "",
    vehicleType: "",
    brandAndType: "",
    chassisNo: "",
    color: "",
    totalSeats: "",
    inFront: "",
    emptyWeight: "",
    serialNumber: "",
    saddleLoad: "",
    typeApproval: "",
    totalWeight: "",
    emissionCode: "",
    placingOnMarket: "",
  };

  const [vehicles, setVehicles] = useState([initialVehicle]);
  const [vehicleDimensions, setVehicleDimensions] = useState([initialVehicleDimensions]);

  const [formData, setFormData] = useState({
    drivers: [
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    ],
    vehicles: [],
    additionalInfo: "",
  });

  const handleVerificationOpen = () => setVerificationOpen(true);
  const handleVerificationClose = () => setVerificationOpen(false);

  const handleImageUpload = (image) => {
    console.log("Image uploaded:", image);
  };

  const handleImageRemove = () => {
    console.log("Image removed");
  };

  const handleCheckboxChange = (action) => {
    setCheckedAddVehicles(action === "addVehicles");
    if (action === "removeVehicles") {
      setFormData((prevData) => ({ ...prevData, vehicles: [] }));
      setSelectTrailer([]);
    }
  };

  const handleVehicleTypeChange = (id, selectedOptions, index) => {
    const updatedSelectVehicle = [...selectVehicle];
    updatedSelectVehicle[index] = selectedOptions;
    setSelectVehicle(updatedSelectVehicle);
  };

  const handleTrailerTypeChange = (id, selectedOptions, index) => {
    const updatedSelectTrailer = [...selectTrailer];
    updatedSelectTrailer[index] = selectedOptions;
    setSelectTrailer(updatedSelectTrailer);
  };



  const addDriver = () => {
    setFormData((prevData) => ({
      ...prevData,
      drivers: [
        ...prevData.drivers,
        { firstName: "", lastName: "", email: "", phone: "" },
      ],
    }));
  };

  const removeDriver = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      drivers: prevData.drivers.filter((_, i) => i !== index),
    }));
  };



  const handleInputChange = (e, index, key) => {
    const { name, value } = e.target;
    const newDrivers = [...formData.drivers];
    newDrivers[index] = {
      ...newDrivers[index],
      [name]: value,
    };
    setFormData({ ...formData, drivers: newDrivers });
  };

  const handleVehicleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newVehicles = [...vehicles];
    newVehicles[index] = {
      ...newVehicles[index],
      [name]: value,
    };
    setVehicles(newVehicles);
  };

  const handleVehicleDimensionsInput = (e, index) => {
    const { name, value } = e.target;
    const newVehicleDimensions = [...vehicleDimensions];
    newVehicleDimensions[index] = {
      ...newVehicleDimensions[index],
      [name]: value,
    };
    setVehicleDimensions(newVehicleDimensions);
  };

  const [dropdowns, setDropdowns] = useState([{ id: 1 }]);

  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { id: dropdowns.length + 1 }]);
    setVehicles([...vehicles, initialVehicle]);
    setVehicleDimensions([...vehicleDimensions, initialVehicleDimensions]);
  };
  console.log("dropdowns", dropdowns);
  const handleRemoveDropdown = (index) => {
    setDropdowns(dropdowns.filter((_, i) => i !== index));
    setSelectTrailer(selectTrailer.filter((_, i) => i !== index));
    setSelectVehicle(selectVehicle.filter((_, i) => i !== index));
    setVehicles(vehicles.filter((_, i) => i !== index));
    setVehicleDimensions(vehicleDimensions.filter((_, i) => i !== index));
  };
  const location = useLocation();


  const { CompanySignupData } = location.state || {};

  if (!CompanySignupData) {
    navigate("/company-signup");
    return null;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("companyName", CompanySignupData.companyName);
    formdata.append("contactPerson", CompanySignupData.contactPerson);
    formdata.append("email", CompanySignupData.email);
    formdata.append("phoneNumber", CompanySignupData.phone);
    formdata.append("VATNumber", CompanySignupData.vatNumber);
    formdata.append("password", CompanySignupData.password);
    formdata.append('areAllVehiclesInsured', CompanySignupData.checkedInsured);
    formdata.append('logo', CompanySignupData.companyLogo);
    formdata.append('officialDocument', CompanySignupData.companyDocuments);
    formdata.append("serviceTypeIDs", JSON.stringify(CompanySignupData.serviceTypeIds));
    formdata.append("additionalInformation", formData.additionalInfo);
    formdata.append("checkedInsured", checkedInsured);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch(`${BASE_URL}company`, requestOptions);
      if (!response.ok) {
        toast.error('Something went wrong. Please try again');

      }
      const result = await response.json();

      const drivers = formData.drivers;
      if (drivers.length) {
        for (let index = 0; index < drivers.length; index++) {
          const driver = drivers[index];

          if (driver.firstName && driver.lastName) {
            const formData = new FormData();

            formData.append("companyID", result.companyID);
            formData.append("firstName", driver.firstName);
            formData.append("lastName", driver.lastName);
            formData.append("email", driver.email);
            formData.append("phoneNumber", driver.phone);
            // formData.append("image", driver.phone);

            const requestOptions = {
              method: "POST",
              body: formData,
              redirect: "follow",
            };

            await fetch(`${BASE_URL}driver`, requestOptions);
          }

        }
      }

      if (vehicles.length) {
        for (let index = 0; index < vehicles.length; index++) {
          const vehicle = vehicles[index];

          // Add vehicleTypeID in the if check
          if (vehicle.numberPlate) {
            const formData = new FormData();
            formData.append("companyID", result.companyID);
            formData.append("numberPlate", vehicle.numberPlate || "");
            // Add vehicleTypeID in here
            formData.append("vehicleType", vehicle.vehicleType || "");
            formData.append("brandAndType", vehicle.brandAndType || "");
            formData.append("chassisNo", vehicle.chassisNo || "");
            formData.append("color", vehicle.color || "");
            formData.append("totalSeats", vehicle.totalSeats || "");
            formData.append("inFront", vehicle.inFront || "");
            formData.append("emptyWeight", vehicle.emptyWeight || "");
            formData.append("serialNumber", vehicle.serialNumber || "");
            formData.append("saddleLoad", vehicle.saddleLoad || "");
            formData.append("typeApproval", vehicle.typeApproval || "");
            formData.append("totalWeight", vehicle.totalWeight || "");
            formData.append("emissionCode", vehicle.emissionCode || "");
            formData.append("placingOnMarket", vehicle.placingOnMarket || "");

            // This the data you can append to formData to create vehicle
            // {
            //   "vehicleTypeID": 1,
            //   "userID": 1,
            //   "numberPlate": "mpx-124 numberPlate",
            //   "vehicleType": "Transporter vehicleType",
            //   "brandAndType": "brandAndType",
            //   "chassisNumber": "chassisNumber",
            //   "color": "color",
            //   "totalSeats": 10,
            //   "frontSeats": 6,
            //   "emptyWeight": 200,
            //   "inFront": "inFront",
            //   "serialNumber": "serialNumber",
            //   "saddleLoad": "saddleLoad",
            //   "typeApproval": "typeApproval",
            //   "totalWeight": 500,
            //   "emissionsCode": "emissionsCode",
            //   "placingInTheMarket": "placingInTheMarket"
            // }

            const requestOptions = {
              method: "POST",
              body: formData,
              redirect: "follow",
            };

            // Updated route to match vehicle api
            await fetch(`${BASE_URL}vehicle`, requestOptions);
          }
        }
      }
      if (vehicleDimensions.length) {
        for (let index = 0; index < vehicleDimensions.length; index++) {
          const dimension = vehicleDimensions[index];

          if (dimension.weight) {
            const formData = new FormData();

            formData.append("companyID", result.companyID);
            formData.append("weight", dimension.weight || "");
            formData.append("payload", dimension.payload || "");
            formData.append("netWeight", dimension.netWeight || "");
            formData.append("totalLength", dimension.totalLength || "");
            formData.append("internalLength", dimension.internalLength || "");
            formData.append("internalLength", dimension.internalLength || "");
            formData.append("insideLength", dimension.insideLength || "");
            formData.append("insideWidth", dimension.insideWidth || "");
            formData.append("insideHeight", dimension.insideHeight || "");

            // This the data you can append to formData to create trailer
            // {
            //   "trailerTypeID": 1,
            //   "companyID": 1,
            //   "totalWeight": 750,
            //   "payload": 210,
            //   "netWeight": 650,
            //   "curbWeight": 200,
            //   "overallLength": 1050,
            //   "totalWidth": 1000,
            //   "totalHeight": 600,
            //   "loadingWeightLength": 2000,
            //   "loadingWeightWidth": 3000,
            //   "loadingWeightHeight": 550,
            //   "loadingSillHeight": 300
            // }


            const requestOptions = {
              method: "POST",
              body: formData,
              redirect: "follow",
            };

            // Updated route to match trailer api
            await fetch(`${BASE_URL}trailer`, requestOptions);
          }
        }
      }

      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log("formData.drivers", formData.drivers);
  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <form className="login-div" onSubmit={handleSubmit}>
            <div className="text-center mb-4 heading">
              <h2>Add Driver</h2>
            </div>
            <div className="input-bg">
              {formData.drivers.map((driver, index) => (
                <div key={index}>
                  <div className="d-flex align-items-center gap-2 mb-3 add-item">
                    <div className="add-icon" onClick={() => removeDriver(index)}>-</div>
                    <p className="add-text">Add Driver</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <SimpleInput
                        placeholder="First Name"
                        name="firstName"
                        value={driver.firstName}
                        onChange={(e) => handleInputChange(e, index, "drivers")}
                      />
                    </div>
                    <div className="col-md-6">
                      <SimpleInput
                        placeholder="Last Name"
                        name="lastName"
                        value={driver.lastName}
                        onChange={(e) => handleInputChange(e, index, "drivers")}
                      />
                    </div>
                  </div>
                  <SimpleInput
                    placeholder="Email Address"
                    name="email"
                    value={driver.email}
                    onChange={(e) => handleInputChange(e, index, "drivers")}
                  />
                  <SimpleInput
                    placeholder="Phone Number"
                    name="phone"
                    value={driver.phone}
                    onChange={(e) => handleInputChange(e, index, "drivers")}
                  />
                  <div className="d-flex justify-content-end">
                    <UploadItem
                      frameImage={Images.frame}
                      label="Driver Documents"
                      onImageUpload={handleImageUpload}
                      onImageRemove={handleImageRemove}
                    />
                  </div>
                </div>
              ))}
              <div className="d-flex align-items-center gap-2 mb-3 add-item">
                <div className="add-icon" onClick={addDriver}>+</div>
                <p className="add-text">
                  {formData.drivers.length ? "Add More Drivers" : "Add Drivers"}
                </p>
              </div>
              <hr />
              <p className="label">Would you like to add your Vehicles?</p>
              <div className="checkbox_div">
                <CustomCheckbox
                  checked={checkedAddVehicles}
                  onChange={() => handleCheckboxChange("addVehicles")}
                  label="Yes"
                />
                <CustomCheckbox
                  checked={!checkedAddVehicles}
                  onChange={() => handleCheckboxChange("removeVehicles")}
                  label="No"
                />
              </div>
              <AddVehicleSection
                checkedAddVehicles={checkedAddVehicles}
                dropdowns={dropdowns}
                selectVehicle={selectVehicle}
                selectTrailer={selectTrailer}
                vehicles={vehicles}
                vehicleDimensions={vehicleDimensions}
                handleRemoveDropdown={handleRemoveDropdown}
                handleVehicleTypeChange={handleVehicleTypeChange}
                handleTrailerTypeChange={handleTrailerTypeChange}
                handleVehicleInputChange={handleVehicleInputChange}
                handleVehicleDimensionsInput={handleVehicleDimensionsInput}

                handleAddDropdown={handleAddDropdown}
              />
              <textarea
                className="textArea"
                placeholder="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              ></textarea>
              <p className="para">
                I confirm that all the information provided above is correct and
                complete. I agree that this data will be used for registration
                and use of the app.
              </p>
              <CustomCheckbox
                checked={checkedInsured}
                onChange={() => setCheckedInsured(!checkedInsured)}
                label="I agree to the terms and conditions."
              />
              <Button
                disabled={!checkedInsured}
                label="Send" className="yellow" type="submit" />
              <Button label="Reset" className="orange" type="reset" />
            </div>
          </form>
        </div>
      </div>
      <VerificationModal
        open={verificationOpen}
        handleOpen={handleVerificationOpen}
        handleClose={handleVerificationClose}
      />
    </AuthLayout>
  );
};

export default AddDriver;
