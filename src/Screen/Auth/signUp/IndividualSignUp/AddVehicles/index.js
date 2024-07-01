import React, { useState } from "react";
import "../../../AuthCommon.scss";
import SimpleInput from "../../../../../Component/SimpleInput";
import { Images } from "../../../../../utils/images";
import AuthLayout from "../../../../../layout/AuthLayout";
import UploadItem from "../../../../../Component/UploadItem";
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

  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(false);
  const [formData, setFormData] = useState({
    drivers: [
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    ],
    vehicles: [
      {
        services: [],
        weight: "",
        payload: "",
        netWeight: "",
        totalLength: "",
        totalHeight: "",
        internalLength: "",
        internalWidth: "",
        internalHeight: "",
        loadingHeight: "",
        additionalInfo: "",
      },
    ],
  });

  const handleImageUpload = (image) => {
    console.log("Image uploaded:", image);
  };

  const handleImageRemove = () => {
    console.log("Image removed");
  };

  const handleCheckboxChange = (name) => {
    if (name === "insured") {
      setCheckedInsured(!checkedInsured);
    } else if (name === "addVehicles") {
      setCheckedAddVehicles(!checkedAddVehicles);
    }
  };

  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === "drivers") {
      const updatedDrivers = [...formData.drivers];
      updatedDrivers[index] = {
        ...updatedDrivers[index],
        [name]: value,
      };
      setFormData({
        ...formData,
        drivers: updatedDrivers,
      });
    } else if (type === "vehicles") {
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
      drivers: formData.drivers,
      vehicles: formData.vehicles,
      checkedInsured,
      checkedAddVehicles,
    };
    console.log("Form data to be sent:", data);
  
  };

  const addDriver = () => {
    setFormData({
      ...formData,
      drivers: [
        ...formData.drivers,
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        },
      ],
    });
  };

  const addVehicle = () => {
    setFormData({
      ...formData,
      vehicles: [
        ...formData.vehicles,
        {
          services: [],
          weight: "",
          payload: "",
          netWeight: "",
          totalLength: "",
          totalHeight: "",
          internalLength: "",
          internalWidth: "",
          internalHeight: "",
          loadingHeight: "",
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
    { id: 2, label: "Uploader" },
    { id: 3, label: "Dump trailer" }, 
    { id: 4, label: "Motorcycle transporter" },
    { id: 5, label: "Vehicle transporter" },
    { id: 6, label: "Boat trailer" },
    { id: 7, label: "Folding trailer" },
    { id: 8, label: "Special trailer " },
    { id: 9, label: "Special trailer  " },
    { id: 10, label: "Suitcase tag " },



  ]


  return (
    <AuthLayout>
      <div className="center-div">
        <div className="bg-company">
          <form className="login-div" onSubmit={handleSubmit}>
            
            <div className="input-bg">
              {formData.vehicles.map((vehicle, index) => (
                <div key={index}>
                  <div className="d-flex align-items-center gap-2 mb-3 add-item" onClick={() => removeVehicle(index)}>
                    <div className="add-icon">-</div>
                    <p className="add-text">Add Vehicle</p>
                  </div>
                  <h4 className="heading-label">Detecting vehicles</h4>
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
                  <SimpleInput
                    placeholder="Total Weight (Kg)"
                    name="weight"
                    value={vehicle.weight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Payload"
                    name="payload"
                    value={vehicle.payload}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Net Weight"
                    name="netWeight"
                    value={vehicle.netWeight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Total Length"
                    name="totalLength"
                    value={vehicle.totalLength}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Total Height"
                    name="totalHeight"
                    value={vehicle.totalHeight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Internal Length"
                    name="internalLength"
                    value={vehicle.internalLength}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Internal Width"
                    name="internalWidth"
                    value={vehicle.internalWidth}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Internal Height"
                    name="internalHeight"
                    value={vehicle.internalHeight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Loading Height"
                    name="loadingHeight"
                    value={vehicle.loadingHeight}
                    onChange={(e) => handleInputChange(e, index, "vehicles")}
                  />
                  
                </div>
              ))}
               <div className="d-flex align-items-center gap-2 mb-3 add-item">
                      <div className="add-icon" onClick={addVehicle}>
                        +
                      </div>
                      <p className="add-text">  { formData.vehicles.length?"Add More Vehicles":"Add  Vehicles "}</p>
                    </div>

              <textarea
                className="textArea"
                placeholder="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              ></textarea>
              <p className="para">
                I confirm that all the information provided above is correct and
                complete. I agree that this data will be used for registration
                and use of the app.
              </p>
              <CustomCheckbox
                checked={!checkedAddVehicles}
                onChange={() => handleCheckboxChange("addVehicles")}
                label="I agree to the terms and conditions."
              />
              <Button label="Send" className="yellow" type="submit" />
              {/* <Button label="Reset" className="orange" type="reset" /> */}
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
