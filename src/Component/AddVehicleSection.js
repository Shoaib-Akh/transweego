import React, { useEffect, useState } from 'react';
import CustomDropDown from "./CustomDropDown";
import VehicleForm from "./VehicleForm";
import VehicleTrailerForm from "./VehicleTrailerForm";
import fetchData, { FetchData, formatOptions } from '../utils/commonFunction';

const AddVehicleSection = ({
  checkedAddVehicles,
  dropdowns,
  selectVehicle,
  selectTrailer,
  vehicles,
  VehicleTrailer,
  handleRemoveDropdown,
  handleVehicleTypeChange,
  handleTrailerTypeChange,
  handleVehicleInputChange,
  handleVehicleTrailerInput,
 

  handleAddDropdown
}) => {

  const useFetchData = (url) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      FetchData(url, setData);
    }, [url]);
  
    return data;
  };
  
  const useFetchAndFormatOptions = (url, idKey, nameKey) => {
    const data = useFetchData(url);
    return data ? formatOptions(data.data, idKey, nameKey) : null;
  };
  
//  options
  const trailerTypesOption = useFetchAndFormatOptions('trailer-types', 'trailerTypeID', 'trailerTypeName');
  const vehicleTypesOption = useFetchAndFormatOptions('vehicle-types', 'vehicleTypeID', 'vehicleTypeName');
   
  
     
      
  return (
    <div>
      {checkedAddVehicles && dropdowns.map((dropdown, index) => (
        <React.Fragment key={index}>
          <div className="d-flex align-items-center gap-2 mb-3 add-item" onClick={() => handleRemoveDropdown(index)}>
            <div className="add-icon">-</div>
            <p className="add-text">Remove Vehicle</p>
          </div>
          <CustomDropDown
            label="Vehicle type"
            no={"cancel"}
            heading={"Vehicle type"}
            placeholder="Select Vehicle type"
            options={vehicleTypesOption}
            yes={"further"}
            onChange={(SelectVehicleType, selectedOptions) => handleVehicleTypeChange(SelectVehicleType, selectedOptions, index)}
          />
          {selectVehicle[index] !== "Transporter" && (
            <CustomDropDown
              label="Trailer type"
              Heading={"Trailer type"}
              placeholder="Select Trailer type"
              options={trailerTypesOption}
              onChange={(TrailerType, selectedOptions) => handleTrailerTypeChange(TrailerType, selectedOptions, index)}
            />
          )}

          {selectVehicle[index] === "Transporter" && (
            <div>
              <h4 className="heading-label">Register vehicles</h4>
              {vehicles.map((vehicle, vIndex) => (
                index === vIndex && (
                  <VehicleForm
                    key={vIndex}
                    vehicle={vehicle}
                    index={vIndex}
                    handleInputChange={handleVehicleInputChange}
                  />
                )
              ))}
            </div>
          )}
          {selectTrailer[index]?.length > 0 &&
            VehicleTrailer.map((vehicleDimension, vdIndex) => (
              index === vdIndex && (
                <VehicleTrailerForm
                  key={vdIndex}
                  vehicle={vehicleDimension}
                  index={vdIndex}
                  handleInputChange={handleVehicleTrailerInput}
                />
              )
            ))
          }
        </React.Fragment>
      ))}
      {checkedAddVehicles &&
        <div className="d-flex align-items-center gap-2 mb-3 add-item" onClick={handleAddDropdown}>
          <div className="add-icon">+</div>
          <p className="add-text">Add Vehicle</p>
        </div>
      }
    </div>
  );
};

export default AddVehicleSection;
