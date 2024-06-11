// src/Login.js
import React, { useState } from "react";
import "../AuthCommon.scss";
import InputField from "../../../Component/InputField";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Component/Button";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (username === "user" && password === "password") {
      alert("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="bg-color">
      <div className="mainBg-img ">
        <Button
          onClick={() => navigate(-1)}
          style={{
            
          }}
          className="backbtn"
          icon={<ArrowBackIcon />}
        />
        <div className="center-div">
          <form onSubmit={handleLogin} className="login-div">
            <div className="text-center mb-4">
              <img src={logo} height={30} alt="car" />
            </div>
            <Button
              onClick={() => navigate("/company_signup")}
              label={"Company"}
              className="green"
            />
            <Button
              label={"Individual transporter"}
              className="orange"
            />
            <Button
             
    
             onClick={() => navigate("/individual_signUp")}
              label={"individual"}
              className="yellow"
            />
            <div className="text-center">
              <p className="new-user mt-4">
                Are you new user?{" "}
                <Link to={"/login"}>
                  <b>Sign in</b>
                </Link>{" "}
                <b></b>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
