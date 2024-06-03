// src/Login.js
import React, { useState } from "react";
import "../common.scss";
import InputField from "../../../Componnet/InputField";
import logo from "../../../assets/images/mainLogo.png";
import Button from "../../../Componnet/Button";
import { Link, useNavigate } from "react-router-dom";
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
        <div className="center-div">
          <form onSubmit={handleLogin} className="login-div">
            <div className="text-center mb-4">
              <img src={logo} height={30} alt="car" />
            </div>
            <Button
        onClick={() => navigate("/ComponySignUp")}
              label={"Company"}
              style={{ background: "transparent", border: "1px solid black" }}
            />
            <Button
              label={"Individual transporter"}
              style={{ background: "@FF8600" }}
            />
            <Button label={"individual"} style={{ background: "#FFD100" }} />
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
