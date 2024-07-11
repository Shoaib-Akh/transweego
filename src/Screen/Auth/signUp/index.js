import React, { useEffect, useState } from "react";
import "../AuthCommon.scss";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Component/Button";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../layout/AuthLayout";
import { FetchData, formatOptions } from "../../../utils/commonFunction";
import { CircularProgress } from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State to track loading

  const useFetchData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      setLoading(true); // Set loading state to true when fetching starts
      FetchData(url, (responseData) => {
        setData(responseData);
        setLoading(false); // Set loading state to false when fetching completes
      });
    }, [url]);

    return data;
  };

  const useFetchAndFormatOptions = (url, idKey, nameKey) => {
    const data = useFetchData(url);
    return data ? formatOptions(data.data, idKey, nameKey) : null;
  };

  // Fetch user types options
  const userTypesOption = useFetchAndFormatOptions('user-types', 'userTypeID', 'userTypeName');

  // Define color mapping
  const colorMapping = {
    Company: 'green',
    'Individual Transporter': 'orange',
    Individual: 'yellow',
  };

  // Define navigation paths with placeholders for id
  const navigationMapping = {
    Company: "/company-signup",
    'Individual Transporter': "/individual-transporter-signup",
    Individual: "/individual-signup",
  };

  return (
    <AuthLayout>
      <div className="center-div">
        <div className="login-div" style={{maxWidth:"unset",width:400}} >
          <div className="text-center mb-4">
            <img src={logo} height={30} alt="car" />
          </div>
          
          {/* Conditional rendering based on loading state */}
          {loading ? (
            <div className="d-flex align-items-center justify-content-center" style={{width:"400px", height:"230px"}}>
             <CircularProgress size={24} style={{height:"50px", width:"50px",color:"#0C3227"}} /> 
             </div>
          ) : (
            userTypesOption && userTypesOption.map((option) => (
              <Button
                key={option.id}
                onClick={() => navigate(`${navigationMapping[option.label]}?/id=${option.id}`)}
                label={option.label}
                className={`${colorMapping[option.label]} mb-1`}
              />
            ))
          )}
          
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;