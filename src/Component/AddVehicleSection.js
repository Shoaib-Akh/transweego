import React from 'react';
import CustomDropDown from "./CustomDropDown";
import VehicleForm from "./VehicleForm";
import VehicleDimensionsForm from "./VehicleDimensionsForm";

const AddVehicleSection = ({
  checkedAddVehicles,
  dropdowns,
  selectVehicle,
  selectTrailer,
  vehicles,
  vehicleDimensions,
  handleRemoveDropdown,
  handleVehicleTypeChange,
  handleTrailerTypeChange,
  handleVehicleInputChange,
  handleVehicleDimensionsInput,
 

  handleAddDropdown
}) => {
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
            options={options}
            yes={"further"}
            onChange={(SelectVehicleType, selectedOptions) => handleVehicleTypeChange(SelectVehicleType, selectedOptions, index)}
          />
          {selectVehicle[index] !== "Transporter" && (
            <CustomDropDown
              label="Trailer type"
              Heading={"Trailer type"}
              placeholder="Select Trailer type"
              options={optionsTrailerType}
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
            vehicleDimensions.map((vehicleDimension, vdIndex) => (
              index === vdIndex && (
                <VehicleDimensionsForm
                  key={vdIndex}
                  vehicle={vehicleDimension}
                  index={vdIndex}
                  handleInputChange={handleVehicleDimensionsInput}
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
