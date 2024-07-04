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
import VehicleForm from "../../../../../Component/VehicleForm";

const AddDriver = () => {
  const navigate = useNavigate();
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [checkedInsured, setCheckedInsured] = useState(false);
  const [checkedAddVehicles, setCheckedAddVehicles] = useState(true);
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
    additionalInfo: ""
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
    }
  };

  // const handleInputChange = (e, index, type) => {
  //   console.log("e",e.target);
  //   const { name, value } = e.target;
  //   setFormData((prevData) => {
  //     const updatedType = [...prevData[type]];
  //     updatedType[index] = { ...updatedType[index], [name]: value };
  //     return { ...prevData, [type]: updatedType };
  //   });
  // };
  const [selectVehicle,setSelectVehicle]=useState()

  const handleVehicleTypeChange = (id, selectedOptions) => {
    
    // setFormData((prevData) => {
    //   const updatedVehicles = [...prevData.vehicles];
    //   updatedVehicles[index].services = selectedOptions;
    //   return { ...prevData, vehicles: updatedVehicles };
    // });
    setSelectVehicle(selectedOptions)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerificationOpen();
    const data = {
      ...formData,
      checkedInsured,
      checkedAddVehicles,
    };
    console.log("Form data to be sent:", data);
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

  const addVehicle = () => {
    setFormData((prevData) => ({
      ...prevData,
      vehicles: [
        ...prevData.vehicles,
        {
          services: [],
          weight: "",
          payload: "",
          netWeight: "",
          totalLength: "",
          totalHeight: "",
          overallLength: "",
          internalLength: "",
          insideLength: "",
          totalHeight: "",
          internalWidth: "",
          internalHeight: "",
          loadingHeight: "",
          sillHeight: "",
          insideWidth: "",
          insideHeight: "",
        },
      ],
    }));
  };

  const removeDriver = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      drivers: prevData.drivers.filter((_, i) => i !== index),
    }));
  };

  const removeVehicle = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      vehicles: prevData.vehicles.filter((_, i) => i !== index),
    }));
  };

  const options = [
    { id: 1, label: "Transporter" },
    { id: 2, label: "Trailer" },
    { id: 3, label: "Animal transporter" },
  ];

  const optionsTrailerType = [
    { id: 1, label: "Low loader" },
    { id: 2, label: "Heigh Loader" },
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
  const initialVehicle = {
    numberPlate: '',
    vehicleType: '',
    brandAndType: '',
    chassisNo: '',
    color: '',
    totalSeats: '',
    inFront: '',
    emptyWeight: '',
    serialNumber: '',
    saddleLoad: '',
    typeApproval: '',
    totalWeight: '',
    emissionCode: '',
    placingOnMarket: ''
  };

  const [vehicles, setVehicles] = useState([initialVehicle]);

  const handleInputChange = (e, index, key) => {
    const { name, value } = e.target;
    const newVehicles = [...vehicles];
    newVehicles[index] = {
      ...newVehicles[index],
      [name]: value,
    };
    setVehicles(newVehicles);
  };
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
              <div className="d-flex align-items-center gap-2 mb-3 add-item" onClick={() => removeVehicle()}>
                    <div className="add-icon">-</div>
                    <p className="add-text">Add Vehicle</p>
                  </div>
            { checkedAddVehicles &&<>
             <CustomDropDown
                    label="Vehicle type"
                    no={"cancel"}
                    heading={"Vehicle type"}
                    placeholder="Select Vehicle type"
                    options={options}
                    yes={"further"}
                    onChange={(SelectVehicleType,selectedOptions) => handleVehicleTypeChange(SelectVehicleType,selectedOptions)}
                  />
                  {selectVehicle !=="Transporter" &&<CustomDropDown
                    label="Trailer type"
                    Heading={"Trailer type"}
                    placeholder="Select Trailer type"
                    options={optionsTrailerType}
                    onChange={(SelectVehicleType) => handleVehicleTypeChange(SelectVehicleType)}
                  />}
            </>  }
                  
              {selectVehicle =="Transporter"&&
                <div >
                  
                  <h4 className="heading-label">Register vehicles</h4>
                  {vehicles.map((vehicle, index) => (
        <VehicleForm
          key={index}
          vehicle={vehicle}
          index={index}
          handleInputChange={handleInputChange}
        />
      ))}
                  {/* <SimpleInput
                    placeholder="Total weight in kg"
                    name="weight"
                    // value={vehicle.weight}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Payload"
                    name="payload"
                    // value={vehicle.payload}
                    onChange={(e) => handleInputChange(e, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Net Weight"
                    name="netWeight"
                    // value={vehicle.netWeight}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Curb weight"
                    name="totalLength"
                    // value={vehicle.totalLength}
                    onChange={(e) => handleInputChange(e, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Overall length"
                    name="overallLength"
                    // value={vehicle.overallLength}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Total width"
                    name="internalLength"
                    // value={vehicle.internalLength}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Total height"
                    name="totalHeight"
                    // value={vehicle.totalHeight}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Loading weight inside length"
                    name="insideLength"
                    // value={vehicle.insideLength}
                    onChange={(e) => handleInputChange(e, "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Loading weight inside width"
                    name="insideWidth"
                    // value={vehicle.insideWidth}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Loading weight inside height"
                    name="insideHeight"
                    // value={vehicle.insideHeight}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  />
                  <SimpleInput
                    placeholder="Loading sill height"
                    name="sillHeight"
                    // value={vehicle.sillHeight}
                    onChange={(e) => handleInputChange(e,  "vehicles")}
                  /> */}
                </div>
              }
              { checkedAddVehicles &&<div className="d-flex align-items-center gap-2 mb-3 add-item">
                <div className="add-icon" onClick={addVehicle}>+</div>
                <p className="add-text">
                  {formData.vehicles.length ? "Add More Vehicles" : "Add Vehicles"}
                </p>
              </div>}
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

export default AddDriver;
