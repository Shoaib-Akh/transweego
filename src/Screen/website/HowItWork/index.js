import React from "react";
import Navbar from "../WesiteComponent/Navbar";
import aerorotate from "../../../assets/images/Star.png";
import cost from "../../../assets/images/cost.svg";
import mobilelogo from "../../../assets/images/mobilelogo.png";
import mobilegroup from "../../../assets/images/mobilegroup.png";
import person from "../../../assets/images/person.png";
import togther from "../../../assets/images/togther.svg";
import mask from "../../../assets/images/mask.svg";
import Vector3 from "../../../assets/images/Vector3.svg";
import Vector4 from "../../../assets/images/Vector4.svg";



import togher1 from "../../../assets/images/togher1.svg";
import "../style.scss";


import dollarvault from "../../../assets/images/dollarvault.png";
import Fotter from "../WesiteComponent/Fotter";


const HowItWork = () => {
  return (
    <>
      <div className="mainbg">
        <Navbar />
      </div>
      <div className="container main-div mb-3 p-5">
        <div className="row d-flex">
          <div className="col-12">
            <div className="text mt-4">
              <p>How TransWeego Works</p>
              <h2>
                Lorem Ipsum is simply<br></br> dummy text
              </h2>
            </div>
          </div>
          <div className="row  justify-content-center    align-items-center">

          <div className="col-2 mt-5 section-2">
            <div className="d-flex flex-column align-items-end">
              <div className="bgimg mb-4">
                <div>

                <img src={cost} width="48" height="48" alt="car" />
                </div>
                
              </div>

              <p> 
                
                Share your cost</p>
            </div>
          </div>
          <div className="col-md-1 d-flex  justify-content-center    align-items-end ">
        <img src={Vector3} alt="car" />

        </div>
          <div className="col-2 mt-5 section-2">
            <div className="d-flex flex-column align-items-center">
              <div className="bgimg mb-4">
                <img src={cost} width="48" height="48" alt="car" />
              </div>
              <p>Earn as you drive</p>
            </div>
          </div>
          <div className="col-md-1 d-flex  justify-content-center    align-items-end " style={{marginTop:"7%"}}>
        <img src={Vector4} alt="car" />

        </div>
          <div className="col-2 mt-5 section-2">
            <div className="d-flex flex-column align-items-start">
              <div className="bgimg mb-4">
                <img src={cost} width="48" height="48" alt="car" />
              </div>
              <p>Increase Visibility</p>
            </div>
          </div>
          </div>

        </div>
        <div style={{backgroundColor:"#0C3227",borderRadius:"36px"}} className="row px-4 py-5 my-5 ">
          <div className="col-md-9  ">

            <h3 className="sction-heading">
            Cost Sharing with TransWeego
            </h3>
            <p className="para">
            Imagine you need to transport a vehicle from Geneva to Zurich. Traditionally, you bear the cost for both the journey and the return of the transporter. TransWeego changes the game with its cost-sharing functionality. By connecting with others who need a vehicle transported back from Zurich to Geneva, you can share the expenses, slashing your costs significantly. This feature is a game-changer for distances over 50km, turning one-way expenses into shared, cost-effective journeys.
            </p>
          </div>
          <div className="col-md-3">
          <img src={mask}   alt="car" />
          </div>
          <div>

          </div>
          </div>
          
        <div className="row mt-5">
          <div className="col-6">
            <img src={mobilelogo} width="204" height="416" alt="car" />
          </div>
          <div className="col-6 d-flex">
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
        <div  className="text-center">
        <img src={togther} alt="car" />
        
        </div>
        <div className="row mt-5">
          <div className="col-6 d-flex">
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
          <div className="col-6  d-flex justify-content-end">
            <img src={mobilegroup} width="422" height="334" alt="car" />
          </div>
        </div>
       <div  className="text-center">
       <img src={togher1} alt="car" />

        </div>
        <div className="row mt-5">
          <div className="col-6">
            <img src={person} width="351" height="585" alt="car" />
          </div>
          <div className="col-6 d-flex">
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
        <div  className="text-center">
       <img src={togher1} alt="car" />

        </div>
        <div className="row mt-5">
          <div className="col-6 d-flex">
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
              <button className="btn orange mt-5">Sign Up</button>
            </div>
          </div>
          <div className="col-6  d-flex justify-content-end">
            <img src={dollarvault} width="472" height="470" alt="car" />
          </div>
        </div>
      </div>
<Fotter/>

    </>
  );
};

export default HowItWork;
