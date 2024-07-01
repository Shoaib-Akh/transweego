import React, { useState } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Component/Button";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthLayout from "../../../layout/AuthLayout";
const SignUp = () => {
  const navigate = useNavigate();

  

  return (
<AuthLayout>


        <div className="center-div">
          <div className="login-div">
            <div className="text-center mb-4">
              <img src={logo} height={30} alt="car" />
            </div>
            <Button
              onClick={() => navigate("/company-signup")}
              label={"Company"}
              className="green"
            />
            <Button 
              label={"Individual transporter"}
      
              onClick={() => navigate("/individual-transporter-signup")}

              className="orange"
            />
            <Button
             
    
             onClick={() => navigate("/individual-signup")}
              label={"individual"}
              
              className="yellow mb-4"
            />
          </div>
        </div>
        </AuthLayout>

  );
};

export default SignUp;
