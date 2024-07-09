import React, { useState } from "react";
import { toast } from "react-toastify";

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
import { BASE_URL } from "../../../../../config/app";

const IndividualTransportAddVehicles = () => {
  const navigate = useNavigate();
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
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(true);
  const [selectVehicle, setSelectVehicle] = useState([]);
  const [selectTrailer, setSelectTrailer] = useState([]);
  const [vehicles, setVehicles] = useState([initialVehicle]);
  const [vehicleDimensions, setVehicleDimensions] = useState([initialVehicleDimensions]);
  const [dropdowns, setDropdowns] = useState([{ id: 1 }]);
  const location = useLocation();
  const { formData } = location?.state || {};

  // if (!formData) {
  //   navigate("/individual-transporter-signup");
  //   return null;
  // }
  console.log("IndividualTransportAddVehiclesData", formData);






  const handleVerificationOpen = () => setVerificationOpen(true);
  const handleVerificationClose = () => setVerificationOpen(false);




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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleVerificationOpen();
  //   const data = {

  //     checkedInsured,
  //     checkedAddVehicles,
  //   };
  //   console.log("Form data to be sent:", data);
  // };









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


  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { id: dropdowns.length + 1 }]);
    setVehicles([...vehicles, initialVehicle]);
    setVehicleDimensions([...vehicleDimensions, initialVehicleDimensions]);
  };

  const handleRemoveDropdown = (index) => {
    setDropdowns(dropdowns.filter((_, i) => i !== index));
    setSelectTrailer(selectTrailer.filter((_, i) => i !== index));
    setSelectVehicle(selectVehicle.filter((_, i) => i !== index));
    setVehicles(vehicles.filter((_, i) => i !== index));
    setVehicleDimensions(vehicleDimensions.filter((_, i) => i !== index));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstName", formData.companyName);
    data.append("lastName", formData.contactPerson);
    data.append("password", formData.email);
    data.append("email", formData.phone);
    data.append("phoneNumber", formData.vatNumber);
    data.append("genderID", formData.password);
    data.append('website', formData.checkedInsured);
    data.append('street', formData.companyLogo);
    data.append('zipCode', formData.companyDocuments);
    data.append("dateOfBirth", formData.additionalInfo);
    data.append("nationalityID", formData.checkedInsured);
    data.append("languageID", formData.checkedInsured);
    data.append("userTypeID", formData.checkedInsured);
    data.append("image", formData.checkedInsured);
    data.append("documentTypeID", formData.checkedInsured);
    data.append("documentBack", formData.checkedInsured);
    data.append("documentFront", formData.checkedInsured);

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
      const result = await response.json();
      // const userID = result.data.userID;

      // Add vehicles
      // if (vehicles.length) {
      //   for (let index = 0; index < vehicles.length; index++) {
      //     const vehicle = vehicles[index];

      //     if (vehicle.numberPlate &&  vehicle.frontSeats ) {
      //       const data = {
      //         vehicleTypeID: SelectVehicleID,
      //         numberPlate: vehicle.numberPlate,
      //         vehicleType: vehicle.vehicleType,
      //         brandAndType: vehicle.brandAndType,
      //         chassisNumber: vehicle.chassisNo,
      //         color: vehicle.color,
      //         totalSeats: vehicle.totalSeats,
      //         frontSeats: vehicle.frontSeats,
      //         emptyWeight: 200,
      //         inFront: vehicle.inFront,
      //         serialNumber: vehicle.serialNumber,
      //         saddleLoad: vehicle.saddleLoad,
      //         typeApproval: vehicle.typeApproval,
      //         totalWeight: vehicle.totalWeight,
      //         emissionsCode: vehicle.emissionCode,
      //         placingInTheMarket: vehicle.placingOnMarket,
      //         userID:userID
      //       }

      //       const vehicleRequestOptions = {
      //         method: "POST",
      //         body: JSON.stringify(data), // Convert data to JSON string
      //         headers: {
      //           'Content-Type': 'application/json', // Set Content-Type header
      //         },
      //         redirect: "follow",
      //       };

      //       const vehicleResponse = await fetch(`${BASE_URL}vehicle`, vehicleRequestOptions);
      //       if (!vehicleResponse.ok) {
      //         throw new Error('Error adding vehicle. Please try again.');
      //       }
      //     }
      //   }
      // }

      // Add trailers
      // if (VehicleTrailer.length ) {
      //   for (let index = 0; index < VehicleTrailer.length; index++) {
      //     const vehicleTrailer = VehicleTrailer[index];

      //     if (vehicleTrailer.weight ) {
      //       const data = {
      //         trailerTypeID: TrailerTypeID,
      //         userID: userID,
      //         totalWeight: vehicleTrailer.weight,
      //         payload: vehicleTrailer.payload,
      //         netWeight: vehicleTrailer.netWeight,
      //         curbWeight: vehicleTrailer.curbWeight,
      //         overallLength: vehicleTrailer.totalLength,
      //         totalWidth: vehicleTrailer.totalWidth,
      //         totalHeight: vehicleTrailer.totalHeight,
      //         loadingWeightLength: vehicleTrailer.insideLength,
      //         loadingWeightWidth: vehicleTrailer.insideWidth,
      //         loadingWeightHeight: vehicleTrailer.insideHeight,
      //         loadingSillHeight: vehicleTrailer.sillHeight
      //       }

      //       const trailerRequestOptions = {
      //         method: "POST",
      //         body: JSON.stringify(data), // Convert data to JSON string
      //         headers: {
      //           'Content-Type': 'application/json', // Set Content-Type header
      //         },
      //         redirect: "follow",
      //       };

      //       const trailerResponse = await fetch(`${BASE_URL}trailer`, trailerRequestOptions);
      //       if (!trailerResponse.ok) {
      //         throw new Error('Error adding trailer. Please try again.');
      //       }
      //     }
      //   }
      // }

      toast.success('User registered successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <form className="login-div" onSubmit={handleSubmit}>
            <div className="text-center mb-4 heading">
              <h2>Add Vehicle</h2>
            </div>
            <div className="input-bg" >
              <div style={{
                height: "399px",
                overflowY: "auto"
              }}>

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
              </div>

              <Button label="Send" className="yellow" type="submit" />
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

export default IndividualTransportAddVehicles;
