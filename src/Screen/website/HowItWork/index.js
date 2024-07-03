import React from "react";
import Navbar from "../WebsiteComponent/Navbar";
import aerorotate from "../../../assets/images/Star.png";
import { Images } from "../../../utils/images";
import "../style.scss";
import dollarvault from "../../../assets/images/dollarvault.png";
import CostSharingInfo from "../WebsiteComponent/CostSharingInfo";
import { useNavigate } from "react-router-dom";

const HowItWork = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="mainbg">
      <Navbar 
        heading={"How It Works"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
      </div>
      <div className="container main-div mb-5 p-5">
      <CostSharingInfo/>
        <div className="row">
          <h2 className="work_text">How it works</h2>
          <div className="col-lg-6 col-md-12 ps-5">
            <img src={Images.mobilelogo} width="204" height="416" alt="car" />
          </div>
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="innertext">
              <h6>Plan Your Trip</h6>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src={Images.together1} alt="car" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="innertext">
              <h6>Find a Match</h6>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-end">
            <img src={Images.mobilegroup} className="img_mobileGroup" height="334" alt="car" />
          </div>
        </div>
        <div className="text-center">
          <img src={Images.togther} alt="car" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={Images.person} width="351" height="585" alt="car" />
          </div>
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="innertext">
              <h6>Connect and Confirm</h6>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src={Images.togther} alt="car" />
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="innertext">
              <h6>Share the Costs</h6>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. 
              </p>
              <button className="btn custom-btn orange mt-5" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-end">
            <img src={Images.dollarvault} width="472" height="470" alt="car" />
          </div>
        </div>
      </div>
      {/* <Fotter/> */}
    </>
  );
};

export default HowItWork;
