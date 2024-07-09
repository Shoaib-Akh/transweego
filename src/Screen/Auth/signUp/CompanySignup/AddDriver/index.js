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
  console.log("selectVehicle", selectVehicle);
  console.log("selectTrailer", selectTrailer);

  const initialVehicleTrailer= {
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
    frontSeats:""
  };

  const [vehicles, setVehicles] = useState([initialVehicle]);
  const [SelectVehicleID, setSelectVehicleID] = useState();
  const [TrailerTypeID, setTrailerTypeID] = useState();


  const [VehicleTrailer, setVehicleTrailer] = useState([initialVehicleTrailer]);

  

  const handleVerificationOpen = () => setVerificationOpen(true);
  const handleVerificationClose = () => setVerificationOpen(false);

  const [formData, setFormData] = useState({
    drivers: [
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        image: null
      },
    ],
    vehicles: [],
    additionalInfo: "",
  });
  
  const handleImageUpload = (image, index) => {
    setFormData((prevState) => {
      const updatedDrivers = [...prevState.drivers];
      updatedDrivers[index].image = image;
      return { ...prevState, drivers: updatedDrivers };
    });
  };
  
  const handleImageRemove = (index) => {
    console.log(`Image removed for driver at index ${index}`);
    setFormData((prevState) => {
      const updatedDrivers = [...prevState.drivers];
      updatedDrivers[index].image = null;
      return { ...prevState, drivers: updatedDrivers };
    });
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
    setSelectVehicleID(id)
   
  };

  const handleTrailerTypeChange = (id, selectedOptions, index) => {
    const updatedSelectTrailer = [...selectTrailer];
    updatedSelectTrailer[index] = selectedOptions;
    setSelectTrailer(updatedSelectTrailer);
    setTrailerTypeID(id)

    console.log("id",id);

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

  const handleVehicleTrailerInput = (e, index) => {
    const { name, value } = e.target;
    const newVehicleTrailer = [...VehicleTrailer];
    newVehicleTrailer[index] = {
      ...newVehicleTrailer[index],
      [name]: value,
    };
    setVehicleTrailer(newVehicleTrailer);
  };

  const [dropdowns, setDropdowns] = useState([{ id: 1 }]);
  const [loading, setLoading] = useState(false);


  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { id: dropdowns.length + 1 }]);
    setVehicles([...vehicles, initialVehicle]);
    setVehicleTrailer([...VehicleTrailer, initialVehicleTrailer]);
  };
  console.log("dropdowns", dropdowns);
  const handleRemoveDropdown = (index) => {
    setDropdowns(dropdowns.filter((_, i) => i !== index));
    setSelectTrailer(selectTrailer.filter((_, i) => i !== index));
    setSelectVehicle(selectVehicle.filter((_, i) => i !== index));
    setVehicles(vehicles.filter((_, i) => i !== index));
    setVehicleTrailer(VehicleTrailer.filter((_, i) => i !== index));
  };
  const location = useLocation();


  const { CompanySignupData } = location.state || {};

  if (!CompanySignupData) {
    navigate("/company-signup");
    return null;
  }



const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true); // Start loading

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
      throw new Error('Error creating company. Please try again.');
    }
    const result = await response.json();
    const companyId=await result.data.companyID
    if (!result.data.companyID) {
      throw new Error('Company ID not found in response.');
    }
    const drivers = formData.drivers;

    if (drivers.length) {
      for (let index = 0; index < drivers.length; index++) {
        const driver = drivers[index];

        if (driver.firstName && driver.lastName) {
          const driverFormData = new FormData();
          driverFormData.append("companyID", companyId);
          driverFormData.append("firstName", driver.firstName);
          driverFormData.append("lastName", driver.lastName);
          driverFormData.append("email", driver.email);
          driverFormData.append("phoneNumber", driver.phone);
          driverFormData.append("image", driver.image);

          const driverRequestOptions = {
            method: "POST",
            body: driverFormData,
            redirect: "follow",
          };

          const driverResponse = await fetch(`${BASE_URL}driver`, driverRequestOptions);
          if (!driverResponse.ok) {
            throw new Error('Error adding driver. Please try again.');
          }
        }
      }
    }
    // Add vehicles
    if (vehicles.length) {
      for (let index = 0; index < vehicles.length; index++) {
        const vehicle = vehicles[index];

        if (vehicle.numberPlate &&  vehicle.frontSeats ) {
          const data = {
            vehicleTypeID: SelectVehicleID,
            numberPlate: vehicle.numberPlate,
            vehicleType: vehicle.vehicleType,
            brandAndType: vehicle.brandAndType,
            chassisNumber: vehicle.chassisNo,
            color: vehicle.color,
            totalSeats: vehicle.totalSeats,
            frontSeats: vehicle.frontSeats,
            emptyWeight: 200,
            inFront: vehicle.inFront,
            serialNumber: vehicle.serialNumber,
            saddleLoad: vehicle.saddleLoad,
            typeApproval: vehicle.typeApproval,
            totalWeight: vehicle.totalWeight,
            emissionsCode: vehicle.emissionCode,
            placingInTheMarket: vehicle.placingOnMarket,
            companyID:companyId
          }

          const vehicleRequestOptions = {
            method: "POST",
            body: JSON.stringify(data), // Convert data to JSON string
            headers: {
              'Content-Type': 'application/json', // Set Content-Type header
            },
            redirect: "follow",
          };

          const vehicleResponse = await fetch(`${BASE_URL}vehicle`, vehicleRequestOptions);
          if (!vehicleResponse.ok) {
            throw new Error('Error adding vehicle. Please try again.');
          }
        }
      }
    }

    // Add trailers
    if (VehicleTrailer.length ) {
      for (let index = 0; index < VehicleTrailer.length; index++) {
        const vehicleTrailer = VehicleTrailer[index];

        if (vehicleTrailer.weight ) {
          const data = {
            trailerTypeID: TrailerTypeID,
            companyID: companyId,
            totalWeight: vehicleTrailer.weight,
            payload: vehicleTrailer.payload,
            netWeight: vehicleTrailer.netWeight,
            curbWeight: vehicleTrailer.curbWeight,
            overallLength: vehicleTrailer.totalLength,
            totalWidth: vehicleTrailer.totalWidth,
            totalHeight: vehicleTrailer.totalHeight,
            loadingWeightLength: vehicleTrailer.insideLength,
            loadingWeightWidth: vehicleTrailer.insideWidth,
            loadingWeightHeight: vehicleTrailer.insideHeight,
            loadingSillHeight: vehicleTrailer.sillHeight
          }

          const trailerRequestOptions = {
            method: "POST",
            body: JSON.stringify(data), // Convert data to JSON string
            headers: {
              'Content-Type': 'application/json', // Set Content-Type header
            },
            redirect: "follow",
          };

          const trailerResponse = await fetch(`${BASE_URL}trailer`, trailerRequestOptions);
          if (!trailerResponse.ok) {
            throw new Error('Error adding trailer. Please try again.');
          }
        }
      }
    }

    toast.success('Company registered successfully!');
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};

  console.log("VehicleTrailer", VehicleTrailer);
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
        onImageUpload={(image) => handleImageUpload(image, index)}
        onImageRemove={() => handleImageRemove(index)}
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
                VehicleTrailer={VehicleTrailer}
                handleRemoveDropdown={handleRemoveDropdown}
                handleVehicleTypeChange={handleVehicleTypeChange}
                handleTrailerTypeChange={handleTrailerTypeChange}
                handleVehicleInputChange={handleVehicleInputChange}
                handleVehicleTrailerInput={handleVehicleTrailerInput}

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
              loading={loading}
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
