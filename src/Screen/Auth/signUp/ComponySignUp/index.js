// src/Login.js
import React, { useState } from "react";
import "../../common.scss";
import InputField from "../../../../Componnet/InputField";
import Button from "../../../../Componnet/Button";
import { Link } from "react-router-dom";

const ComponySignUp = () => {
  return (
    <div className="bg-color">
      <div className="mainBg-img ">
        <div className="center-div">
          <form className="login-div">
            <div className="text-center mb-4">
              <h2>Please register</h2>
            </div>

            <InputField
            requrid
              lable={"E-Mail/Phone number"}
              placeholder={"iamamember@gmail.com"}
            />
            <InputField
              lable={"Password"}
              placeholder={"Enter your password"}
              type="password"
            />

            <Button label={"Sign-in"} />
            <div className="text-center">
              <h5 className="Forgotten">Forgotten password?</h5>
              <p className="new-user mt-4">
                Are you new user?{" "}
                <Link to="/signup">
                  <b>Sign up</b>
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComponySignUp;
