import React, { useRef } from "react";
import "../style.scss";

import Navbar from "../WebsiteComponent/Navbar";

import Fotter from "../WebsiteComponent/Footer";
import { Images } from "../../../utils/images";
import { Box, Button, Modal, Typography } from "@mui/material";
const handleClick = (event) => {
  // Remove active class from all buttons
  document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
  
  // Add active class to the clicked button
  event.target.classList.add('active');
};

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
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="mainbg">
        <Navbar
          heading={"RevolutionizeYour Vehicle Transport"}
          subHeading={"Drive Smart, Share More, Earn Big, Preserve Nature."}
        />
      </div>
      <div className="container-box main-div">
        <div className="row">
          <div className="col-12">
            <div className="text mt-4">
              <p>How TransWeego Works</p>
              <h2>
                Lorem Ipsum is simply<br></br> dummy text
              </h2>
            </div>
            <div className="scrollable-container">
    <div className="button-container">
        <button className="btn offwhite" onClick={handleClick}>Vehicles</button>
        <button className="btn offwhite" onClick={handleClick}>Furniture</button>
        <button className="btn offwhite" onClick={handleClick}>Parcels</button>
        
        <button className="btn offwhite" onClick={handleClick}>Vehicles</button>
        <button className="btn offwhite" onClick={handleClick}>Furniture</button>
        <button className="btn offwhite" onClick={handleClick}>Parcels</button>
        
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
                <img src={Images.car} width="150" height="150" alt="car" />
                <img src={Images.car} width="150" height="150" alt="car" />
                <img src={Images.car} width="150" height="150" alt="car" />
                <img src={Images.car} width="150" height="150" alt="car" />
                <img src={Images.car} width="150" height="150" alt="car" />
                <img src={Images.car} width="150" height="150" alt="car" />
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
            <div className="group-btn mt-5  mb-4">
              <button className="btn orange">Send</button>
              <button className="btn yellow">Transparent</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className= "style">
          
          
          </Box>
          
        </Modal> */}
      </div>
      <div className="lorem-section mt-6r">
        <div className="container-box">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 col-md-6 col-12 my-5">
              <div className="heading-sec">
                <p>Why Choose TransWeGo</p>
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry
                </h1>
              </div>
              <div className="d-flex align-items-center gap-5 mt-5">
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Cost Efficiency</p>
                </div>
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Eco-friendliness</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 mt-5">
                <div className="d-flex align-items-center gap-3 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Convenience</p>
                </div>
                <div className="d-flex align-items-center gap-3 ps-2 setting">
                  <img src={Images.setting} width="48" height="48" alt="car" />
                  <p>Security</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12 carimg mt-5">
              <img
                src={Images.carimg}
                className="img-fluid w-100 h-100"
                alt="car"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-box my-5 video-sec mt-6r">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Images.truck} width="500" height="500" alt="truck" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center mt-4 mt-md-0 truck-text">
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
      <div className="container-box my-5 transwego-sec mt-6r">
        <div className="row">
          <div className="col-1   truck-text"></div>
          <div className="col-lg-7 col-md-7 col-12 pl-5 d-flex flex-column  justify-content-center  truck-text">
            <h2>Get the TransWeego app</h2>
            <p>
              Download and join for free. You'll never pay a membership fee.
            </p>
            <div className="d-lg-flex align-items-lg-center d-md-flex gap-lg-3 gap-md-3 mt-md-3 flex-lg-row flex-md-column d-flex flex-column mt-3 gap-4 mb-sm-2 mb-2 mb-md-0">
              <img
                src={Images.appstore}
                width="222"
                height="68px"
                alt="truck"
              />
              <img src={Images.google} width="222" height="68px" alt="truck" />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-sm-center text-center">
            <img src={Images.mobile} className="mbl-img" alt="truck" />
          </div>
        </div>
      </div>
      {/*what client says  */}

      <div className="container-box client-sec mt-6r">
        <h2>What client says about us</h2>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex align-items-center justify-content-center ">
                <div className="img-office">
                  <img
                    src={Images.office}
                    className="img-fluid h-100 w-100"
                    alt="truck"
                  />
                </div>
                <div className="left-sec">
                  <p className="textlorem">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                  <div className="starimg">
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                  </div>

                  <p className="john">James John</p>
                  <p className="founder">Co Founder</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex align-items-center justify-content-center ">
                <div className="img-office">
                  <img
                    src={Images.office}
                    className="img-fluid h-100 w-100"
                    alt="truck"
                  />
                </div>
                <div className="left-sec">
                  <p className="textlorem">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                  <div className="starimg">
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                  </div>
                  <p className="john">James John</p>
                  <p className="founder">Co Founder</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex align-items-center justify-content-center ">
                <div className="img-office">
                  <img
                    src={Images.office}
                    className="img-fluid h-100 w-100"
                    alt="truck"
                  />
                </div>
                <div className="left-sec">
                  <p className="textlorem">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                  </p>
                  <div className="starimg">
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                    <img src={Images.Star} alt="car" />
                  </div>

                  <p className="john">James John</p>
                  <p className="founder">Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center my-5 premium-sec mt-6r mb-5">
        <h5 className="text">Premium partners</h5>
        <h2 className="lorem">Lorem Ipsum is simply dummy text </h2>
        <div className="text-center">

          <button className="btn offwhite" onClick={handleClick}>Transportation Companies</button>
          <button className="btn offwhite" onClick={handleClick}>Vehicle Dealerships</button>
          <button className="btn offwhite"onClick={handleClick}>Insurance</button>
        </div>
      </div>
      <div
        style={{ overflowX: "scroll", display: "flex", scrollbarWidth: "none" }}
        className="my-5"
      >
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
        <img src={Images.CompanyLogo} height="214" alt="car" className="mx-1" />
      </div>
    </>
  );
};

export default HomePage;
