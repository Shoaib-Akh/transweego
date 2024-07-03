import React, { useState } from "react";
import "../../../AuthCommon.scss";
import SimpleInput from "../../../../../Component/SimpleInput";
import AuthLayout from "../../../../../layout/AuthLayout";
import CustomCheckbox from "../../../../../Component/CustomCheckbox";
import MultiSelectDropdown from "../../../../../Component/MultiSelectDropdown";
import Button from "../../../../../Component/Button";
import { useNavigate } from "react-router-dom";
import CustomDropDown from "../../../../../Component/CustomDropDown";
import VerificationModal from "../../../../../Component/Modal/VerificationModal";

const AddVehicles = () => {
  const navigate = useNavigate();
  const [Verification, setVerification] = useState(false);
  const VerificationHandleOpen = () => setVerification(true);
  const VerificationHandleClose = () => setVerification(false);

  const [checkedAddVehicles, setCheckedAddVehicles] = useState(false);
  const [formData, setFormData] = useState({
    vehicles: [
      {
        services: [],
        numberPlate: "",
        vehicleType: "",
        brandAndType: "",
        chassisNo: "",
        color: "",
        totalSeats: "",
        emptyWeight: "",
        serialNumber: "",
        inFront:"",
        saddleLoad: "",
        typeApproval: "",
        totalWeight: "",
        emissionCode: "",
        placingOnMarket: "",
        additionalInfo: "",
      },
    ],
  });

  const handleCheckboxChange = () => {
    setCheckedAddVehicles(!checkedAddVehicles);
  };

  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "vehicles") {
      const updatedVehicles = [...formData.vehicles];
      updatedVehicles[index] = {
        ...updatedVehicles[index],
        [name]: value,
      };
      setFormData({
        ...formData,
        vehicles: updatedVehicles,
      });
    }
  };

  const handleVehicleTypeChange = (SelectVehicleType, index) => {
    const updatedVehicles = [...formData.vehicles];
    updatedVehicles[index] = {
      ...updatedVehicles[index],
      services: SelectVehicleType,
    };
    setFormData({
      ...formData,
      vehicles: updatedVehicles,
    });
  };

  const handleSubmit = (e) => {
    VerificationHandleOpen();
    e.preventDefault();
    const data = {
      vehicles: formData.vehicles,
      checkedAddVehicles,
    };
    console.log("Form data to be sent:", data);
  };

  const addVehicle = () => {
    setFormData({
      ...formData,
      vehicles: [
        ...formData.vehicles,
        {
          services: [],
          numberPlate: "",
          vehicleType: "",
          brandAndType: "",
          chassisNo: "",
          color: "",
          totalSeats: "",
          emptyWeight: "",
          serialNumber: "",
          inFront:"",
          saddleLoad: "",
          typeApproval: "",
          totalWeight: "",
          emissionCode: "",
          placingOnMarket: "",
          additionalInfo: "",
        },
      ],
    });
  };

  const removeVehicle = (index) => {
    const updatedVehicles = formData.vehicles.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      vehicles: updatedVehicles,
    });
  };

  const options = [
    { id: 1, label: "Transporter" },
    { id: 2, label: "Trailer" },
    { id: 3, label: "Animal transporter" },
  ];

  const optionsTrailerType = [
    { id: 1, label: "Low loader" },
    { id: 2, label: "High Loader" },
    { id: 3, label: "Tipping trailers" },
    { id: 4, label: "Motorcycle transporter" },
    { id: 5, label: "Vehicle transporter" },
    { id: 6, label: "Boat trailer" },
    { id: 7, label: "Folding trailer" },
    { id: 8, label: "Livestock trailers" },
    { id: 9, label: "Tree machinery transport" },
    { id: 10, label: "Special trailers" },
    { id: 11, label: "Box trailers" },
  ];

  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <form className="login-div" onSubmit={handleSubmit}>
          <div className="text-center mb-4 heading">
              <h2>Add Vehicle</h2>
            </div>
            <div className="input-bg">
              {formData.vehicles.map((vehicle, index) => (
                <div key={index}>
                  <div className="d-flex align-items-center gap-2 mb-3 add-item" onClick={() => removeVehicle(index)}>
                    <div className="add-icon">-</div>
                    <p className="add-text">Add Vehicle</p>
                  </div>
                  <h4 className="heading-label">Register vehicles</h4>
                  <CustomDropDown
                    label="Vehicle type"
                    no={"cancel"}
                    heading={"Vehicle type"}
                    placeholder="Select Vehicle type"
                    options={options}
                    yes={"further"}
                    onChange={(SelectVehicleType) =>
                      handleVehicleTypeChange(SelectVehicleType, index)
                    }
                  />
                  <MultiSelectDropdown
                    label="Trailer type"
                    Heading={"Trailer type"}
                    placeholder="Select Trailer type"
                    options={optionsTrailerType}
                    onChange={(SelectVehicleType) =>
                      handleVehicleTypeChange(SelectVehicleType, index)
                    }
                  />
                  <h4 className="heading-label">Record transporter data</h4>
                  <SimpleInput
                    placeholder="Number plate"
                    name="numberPlate"
                    value={vehicle.numberPlate}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Vehicle type"
                    name="vehicleType"
                    value={vehicle.vehicleType}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Brand and type"
                    name="brandAndType"
                    value={vehicle.brandAndType}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Chassis no."
                    name="chassisNo"
                    value={vehicle.chassisNo}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Color"
                    name="color"
                    value={vehicle.color}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <SimpleInput
                        placeholder="Total seats"
                        name="totalSeats"
                        value={vehicle.totalSeats}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                    </div>
                    <div className="col-md-6">
                    <SimpleInput
                        placeholder="in front"
                        name="inFront"
                        value={vehicle.inFront}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                     
                    </div>
                  </div>
                  <SimpleInput
                        placeholder="Empty weight in kg"
                        name="emptyWeight"
                        value={vehicle.emptyWeight}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                  <SimpleInput
                        placeholder="in front"
                        name="inFront"
                        value={vehicle.inFront}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                  <div className="row">
                    <div className="col-md-6 ">
                      <SimpleInput
                        placeholder="Serial number"
                        name="serialNumber"
                        value={vehicle.serialNumber}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                    </div>
                    <div className="col-md-6">
                      <SimpleInput
                        placeholder="Saddle load"
                        name="saddleLoad"
                        value={vehicle.saddleLoad}
                        onChange={(e) => handleInputChange(e, index, "vehicles")}
                      />
                    </div>
                  </div>
                  <SimpleInput
                    placeholder="Type approval"
                    name="typeApproval"
                    value={vehicle.typeApproval}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Total weight in kg"
                    name="totalWeight"
                    value={vehicle.totalWeight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Emission code"
                    name="emissionCode"
                    value={vehicle.emissionCode}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Placing on the market"
                    name="placingOnMarket"
                    value={vehicle.placingOnMarket}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                </div>
              ))}
              <div className="d-flex align-items-center gap-2 mb-3 add-item">
                <div className="add-icon" onClick={addVehicle}>
                  +
                </div>
                <p className="add-text">{formData.vehicles.length ? "Add More Vehicles" : "Add Vehicles"}</p>
              </div>
              <textarea
                className="textArea"
                placeholder="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              ></textarea>
              <p className="para">
                I confirm that all the information provided above is correct and complete. I agree that this data will be used for registration and use of the app.
              </p>
              <CustomCheckbox
                checked={!checkedAddVehicles}
                onChange={handleCheckboxChange}
                label="I agree to the terms and conditions."
              />
              <Button label="Send" className="yellow" type="submit" />
              <Button label="Reset" className="orange" type="reset" />
            </div>
          </form>
        </div>
      </div>
      <VerificationModal
        open={Verification}
        handleOpen={VerificationHandleOpen}
        handleClose={VerificationHandleClose}
      />
    </AuthLayout>
  );
};

export default AddVehicles;
