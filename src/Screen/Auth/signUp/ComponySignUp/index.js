// src/Login.js
import React, { useState } from "react";
import "../../AuthCommon.scss";
import InputField from "../../../../Componnet/InputField";
import Button from "../../../../Componnet/Button";
import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../../../utils/images";
import DropDown from "../../../../Componnet/DropDown";

const ComponySignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-color">
      <div className="mainBg-img">
        <div className="center-div" style={{ height: "auto" }}>
          <div className="bg-company">
            <form className="login-div">
              <div className="text-center mb-4">
                <h2>Please register</h2>
              </div>
              <div className="input-bg">
                <InputField
                  required
                  lable={"Firma/Unternehmen"}
                  placeholder={"Unternehmen Name eingeben"}
                />
                <InputField
                  lable={"Password"}
                  placeholder={"Enter your password"}
                  type="password"
                />
                <InputField
                  required
                  lable={"E-Mail/Phone number"}
                  placeholder={"iamamember@gmail.com"}
                />

                <InputField
                  required
                  lable={"Telefonnummer"}
                  placeholder={"Nummer eingeben"}
                />
                <DropDown
                  required
                  label={"Vorname*"}
                  placeholder={"MwSt. eingeben"}
                />

{/*                 
                <InputField
                  required
                  lable={"VAT Number"}
                  placeholder={"MwSt. eingeben"}
                />
                <InputField lable={"Firma Website"} placeholder={"Add Link"} />
                <h3>Sind alle meine Fahrzeuge versichert?</h3>
                <div className="d-flex align-items-center gap-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Ja
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Nein
                    </label>
                  </div>
                </div>
                <hr></hr>
                <h2>Upload firma documents*</h2>
                <div className="d-flex gap-3">
                  <div className="upload-photo">
                    <img
                      src={Images.frame}
                      height="52"
                      width="52"
                      alt="car"
                      className="mx-1"
                    />
                  </div>
                  <div className="upload-photo">
                    <img
                      src={Images.frame}
                      height="52"
                      width="52"
                      alt="car"
                      className="mx-1"
                    />
                  </div>
                </div>
                <hr></hr>
                <h2>Will you like to add your Vehicles?</h2>
                <div className="d-flex align-items-center gap-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Ja
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Nein
                    </label>
                  </div>
                </div> */}

                <Button
                  onClick={() => navigate("/AddDriver")}
                  label={"Sign-in"}
                />
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponySignUp;
