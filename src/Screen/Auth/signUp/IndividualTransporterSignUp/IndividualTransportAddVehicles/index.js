import React, { useState } from "react";
import "../../../AuthCommon.scss";
import SimpleInput from "../../../../../Component/SimpleInput";
import { Images } from "../../../../../utils/images";
import AuthLayout from "../../../../../layout/AuthLayout";
import UploadItem from "../../../../../Component/UploadItem";
import CustomCheckbox from "../../../../../Component/CustomCheckbox";
import Button from "../../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import VerificationModal from "../../../../../Component/Modal/VerificationModal";

import AddVehicleSection from "../../../../../Component/AddVehicleSection";

const IndividualTransportAddVehicles = () => {
  const navigate = useNavigate();
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(true);
  const [selectVehicle, setSelectVehicle] = useState([]);
  const [selectTrailer, setSelectTrailer] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerificationOpen();
    const data = {

      checkedInsured,
      checkedAddVehicles,
    };
    console.log("Form data to be sent:", data);
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

  const handleRemoveDropdown = (index) => {
    setDropdowns(dropdowns.filter((_, i) => i !== index));
    setSelectTrailer(selectTrailer.filter((_, i) => i !== index));
    setSelectVehicle(selectVehicle.filter((_, i) => i !== index));
    setVehicles(vehicles.filter((_, i) => i !== index));
    setVehicleDimensions(vehicleDimensions.filter((_, i) => i !== index));
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
