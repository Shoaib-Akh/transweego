import React from "react";
import Navbar from "../WebsiteComponent/Navbar";
import aerorotate from "../../../assets/images/Star.png";
import { Images } from "../../../utils/images";
import "../style.scss";
import dollarvault from "../../../assets/images/dollarvault.png";

const HowItWork = () => {
  return (
    <>
      <div className="mainbg">
      <Navbar 
        heading={"How It Works"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
      </div>
      <div className="container main-div mb-5 p-5">
        <div className="row d-flex">
          <div className="col-12">
            <div className="text mt-4">
              <p>How TransWeego Works</p>
              <h2>
                Lorem Ipsum is simply<br></br> dummy text
              </h2>
            </div>
          </div>
          <div className="row  justify-content-center align-items-center">
            <div className="col-2 mt-5 section-2">
              <div className="d-flex flex-column align-items-center">
                <div className="bgimg mb-4">
                  <div>
                    <img src={Images.cost} width="48" height="48" alt="car" />
                  </div>
                </div>
                <p className="img-text">Share your cost</p>
              </div>
            </div>
            <div className="col-md-1 d-flex  justify-content-center align-items-end">
              <img src={Images.Vector3} alt="car" />
            </div>
            <div className="col-2 mt-5 section-2">
              <div className="d-flex flex-column align-items-center">
                <div className="handimg mb-4">
                  <img src={Images.hand} width="48" height="48" alt="car" />
                </div>
                <p className="img-text">Earn as you drive</p>
              </div>
            </div>
            <div
              className="col-md-1 d-flex  justify-content-center align-items-center"
              style={{ marginTop: "7%" }}
            >
              <img src={Images.Vector4} alt="car" />
            </div>
            <div className="col-2 mt-5 section-2">
              <div className="d-flex flex-column align-items-center">
                <div className="handimg mb-4">
                  <img src={Images.spring} width="48" height="48" alt="car" />
                </div>
                <p className="img-text">Increase Visibility</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#0C3227", borderRadius: "36px" }}
          className="row px-4 py-5 my-5 mt-6r"
          >
          <div className="col-md-9  ">
            <h3 className="sction-heading mb-4">Cost Sharing with TransWeego</h3>
            <p className=" Sharing_para">
              Imagine you need to transport a vehicle from Geneva to Zurich.
              Traditionally, you bear the cost for both the journey and the
              return of the transporter. TransWeego changes the game with its
              cost-sharing functionality. By connecting with others who need a
              vehicle transported back from Zurich to Geneva, you can share the
              expenses, slashing your costs significantly. This feature is a
              game-changer for distances over 50km, turning one-way expenses
              into shared, cost-effective journeys.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Images.mask} alt="car" />
          </div>
          <div></div>
        </div>
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
            <img src={Images.mobilegroup} width="422" height="334" alt="car" />
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
              <button className="btn custom-btn orange mt-5">Sign Up</button>
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
