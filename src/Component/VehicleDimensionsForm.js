import React from 'react';
import SimpleInput from './SimpleInput'; // Make sure to import your SimpleInput component
// import "../../../AuthCommon.scss";
import "../Screen/Auth/AuthCommon.scss";

const VehicleDimensionsForm = ({ vehicle, index, handleInputChange }) => {
  return (
    <>
      <SimpleInput
        placeholder="Total weight in kg"
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
        placeholder="Curb weight"
        name="totalLength"
        value={vehicle.totalLength}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Overall length"
        name="overallLength"
        value={vehicle.overallLength}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Total width"
        name="internalLength"
        value={vehicle.internalLength}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Total height"
        name="totalHeight"
        value={vehicle.totalHeight}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Loading weight inside length"
        name="insideLength"
        value={vehicle.insideLength}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Loading weight inside width"
        name="insideWidth"
        value={vehicle.insideWidth}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Loading weight inside height"
        name="insideHeight"
        value={vehicle.insideHeight}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
      <SimpleInput
        placeholder="Loading sill height"
        name="sillHeight"
        value={vehicle.sillHeight}
        onChange={(e) => handleInputChange(e, index, "vehicles")}
      />
    </>
  );
};

export default VehicleDimensionsForm;
