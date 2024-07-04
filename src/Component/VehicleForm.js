import React from 'react';
import SimpleInput from './SimpleInput'; // Make sure to import your SimpleInput component
// import "../../../AuthCommon.scss";
import "../Screen/Auth/AuthCommon.scss";
const VehicleForm = ({ vehicle, index, handleInputChange }) => {
  return (
    <div>
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
        <div className="col-md-6">
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
  );
};

export default VehicleForm;
