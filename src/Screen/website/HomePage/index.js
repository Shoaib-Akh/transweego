import React, { useRef } from "react";
import "../style.scss";


import Navbar from "../WesiteComponent/Navbar";

import Fotter from "../WesiteComponent/Fotter";
import { Images } from "../../../utils/images";


const HomePage = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -170, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 170, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="mainbg">
        <Navbar />
      </div>
      <div className="container-box main-div mb-3">
        <div className="row">
          <div className="col-12">
            <div className="text mt-4">
              <p>How TransWeego Works</p>
              <h2>
                Lorem Ipsum is simply<br></br> dummy text
              </h2>
            </div>
            <div className="scrollable-container">
              <div className="group-btn">
                <button className="btn orange">vehicles</button>
                <button className="btn offwhite">Transparent</button>
                <button className="btn offwhite">Send</button>
                <button className="btn offwhite">Transparent</button>
                <button className="btn offwhite">Transparent</button>
                <button className="btn offwhite">Transparent</button>
              </div>
            </div>
            <div className="mt-5 d-flex gap-3 align-items-center  justify-content-center">
              <img
                src={Images.aeroleft}
                width="22"
                height="42"
                alt="left arrow"
                onClick={scrollLeft}
                style={{ cursor: "pointer" }}
              />
              <div
                className="d-flex gap-3 align-items-center overflow-auto w-75 text-center overflow-x:hidden"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  width: "80%",
                }}
                ref={scrollContainerRef}
              >
                <img src={Images.car} width="170" height="170" alt="car" />
                <img src={Images.car} width="170" height="170" alt="car" />
                <img src={Images.car} width="170" height="170" alt="car" />
                <img src={Images.car} width="170" height="170" alt="car" />
                <img src={Images.car} width="170" height="170" alt="car" />
                <img src={Images.car} width="170" height="170" alt="car" />
              </div>
              <img
                src={Images.aeroright}
                width="22"
                height="42"
                alt="right arrow"
                onClick={scrollRight}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="group-btn mt-5 text-center mb-4">
              <button className="btn orange">Send</button>
              <button className="btn yellow">Transparent</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lorem-section">
        <div className="container-box">
          <div className="row d-flex justify-content-between">
            <div className="col-5 my-5">
              <div className="heading-sec">
                <p>Why Choose TransWeGo</p>
                <h1>
                  Lorem Ipsum issimply dummy textof the printing andtypesetting
                  industry
                </h1>
              </div>
              <div className="d-flex align-items-center gap-5 mt-5">
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Cost Efficiency</p>
                </div>
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Cost Efficiency</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 mt-5">
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Cost Efficiency</p>
                </div>
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Cost Efficiency</p>
                </div>
              </div>
            </div>
            <div className="col-7 carimg mt-5">
              <img src={Images.carimg} className="img-fluid w-100 h-100" alt="car" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-box my-5 video-sec">
        <div className="row">
          <div className="col-6">
            <img src={Images.truck} width="500" height="500" alt="truck" />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center truck-text">
            <h6>About us</h6>
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      {/*transweego section  */}
      <div className="container-box my-5 transwego-sec ">
        <div className="row   ">
          <div className="col-1  pl-5    truck-text"></div>
          <div className="col-7 pl-5 d-flex flex-column  justify-content-center  truck-text">
            <h2>Get the TransWeego app</h2>
            <p>
              Download and join for free. You'll never pay a membership fee.
            </p>
            <div className="d-flex align-items-center gap-3">
              <img src={Images.appstore} width="222" height="68px" alt="truck" />
              <img src={Images.google} width="222" height="68px" alt="truck" />
            </div>
          </div>
          <div className="col-3">
            <img src={Images.mobile} width="198" height="386px" alt="truck" />
          </div>
        </div>
      </div>
      <div className="container-box  ">
        <h2>What client says about us</h2>
        <div className="d-flex align-items-center justify-content-center ">
          <img src={Images.office} height="386px" alt="truck" />
          <div
            style={{
              backgroundColor: " #0C3227",
              padding: "40px  30px",
              borderRadius: 33,
              marginLeft: "-60px",
            }}
          >
            <p style={{ color: "#F8F8F8", fontSize: "26px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <img src={Images.Star} width="30" height="30" alt="car" className="mx-1" />
            <img src={Images.Star} width="30" height="30" alt="car" className="mx-1" />
            <img src={Images.Star} width="30" height="30" alt="car" className="mx-1" />
            <img src={Images.Star} width="30" height="30" alt="car" className="mx-1" />
            <img src={Images.Star} width="30" height="30" alt="car" className="mx-1" />
            <p
              style={{
                fontSize: "26px",
                color: "#F8F8F8",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              James John
            </p>

            <p style={{ fontSize: "26px", color: "#FF8600", marginTop: 5 }}>
              Co Founder
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex  flex-column align-items-center my-5 ">
        <h5>Premium partners</h5>
        <h2>Lorem Ipsum is simply dummy text </h2>
        <div>
          <button className="btn orange">Transportation Companies</button>
          <button className="btn offwhite">Vehicle Dealerships</button>
          <button className="btn offwhite">Insurance</button>
        </div>
      </div>
      <div
        style={{ overflowX: "scroll", display: "flex", scrollbarWidth: "none" }}
        className="my-5"
      >
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.componyLogo} height="214" alt="car" className="mx-1" />
      </div>


      <Fotter />

    </>
  );
};

export default HomePage;
