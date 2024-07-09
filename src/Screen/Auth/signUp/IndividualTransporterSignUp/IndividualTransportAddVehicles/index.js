import React, { useState } from "react";
import { toast } from "react-toastify";

import "../../../AuthCommon.scss";
import AuthLayout from "../../../../../layout/AuthLayout";
import Button from "../../../../../Component/Button";
import { useLocation, useNavigate } from "react-router-dom";
import VerificationModal from "../../../../../Component/Modal/VerificationModal";
import AddVehicleSection from "../../../../../Component/AddVehicleSection";
import { BASE_URL } from "../../../../../config/app";
const IndividualTransportAddVehicles = () => {
  const navigate = useNavigate();
  const initialVehicleTrailer = {
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
  const [SelectVehicleID, setSelectVehicleID] = useState();
  const [TrailerTypeID, setTrailerTypeID] = useState();
  const [selectVehicle, setSelectVehicle] = useState([]);
  const [selectTrailer, setSelectTrailer] = useState([]);
  const [vehicles, setVehicles] = useState([initialVehicle]);
  const [VehicleTrailer, setVehicleTrailer] = useState([initialVehicleTrailer]);
  const [dropdowns, setDropdowns] = useState([{ id: 1 }]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { formData } = location?.state || {};
  const handleVerificationOpen = () => setVerificationOpen(true);
  const handleVerificationClose = () => setVerificationOpen(false);
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


  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { id: dropdowns.length + 1 }]);
    setVehicles([...vehicles, initialVehicle]);
    setVehicleTrailer([...VehicleTrailer, initialVehicleTrailer]);
  };

  const handleRemoveDropdown = (index) => {
    setDropdowns(dropdowns.filter((_, i) => i !== index));
    setSelectTrailer(selectTrailer.filter((_, i) => i !== index));
    setSelectVehicle(selectVehicle.filter((_, i) => i !== index));
    setVehicles(vehicles.filter((_, i) => i !== index));
    setVehicleTrailer(VehicleTrailer.filter((_, i) => i !== index));
  };



  const handleSubmit = async (e) => {
    setLoading(true); // Start loading
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
    data.append("documentBack", formData.backImage    );
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
      const result = await response.json();
      const userID = result.data.userID;

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
              userID:userID
            }

            const vehicleRequestOptions = {
              method: "POST",
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json', 
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
              userID: userID,
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
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json', 
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
      setLoading(false);
      navigate('/')
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
                  VehicleTrailer={VehicleTrailer}
                  handleRemoveDropdown={handleRemoveDropdown}
                  handleVehicleTypeChange={handleVehicleTypeChange}
                  handleTrailerTypeChange={handleTrailerTypeChange}
                  handleVehicleInputChange={handleVehicleInputChange}
                  handleVehicleTrailerInput={handleVehicleTrailerInput}

                  handleAddDropdown={handleAddDropdown}
                />
              </div>

              <Button label="Send" className="yellow" type="submit"
                   loading={loading}
              />
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
