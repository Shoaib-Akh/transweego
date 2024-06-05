import React from "react";
import "../style.scss";
import { Images } from "../../../utils/images";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div className="text-center logo">
          <img
            src={Images.logolanding}
            class="img-fluid"
            alt=""
            height="71"
            width="583"
          />
          <h3>Welcome to TransWeGo</h3>
          <h1>Ready, Set, Transport!</h1>
          <p className="w-75 mx-auto">
            Dive into a world where your vehicle does more than just travel.
            Discover how sharing and earning with TransWeGo can revolutionize
            your journeys. Join us today and be the first to experience the
            future of transportation — efficient, economical, and eco-friendly.
          </p>
          <button className="btn orange mt-5">pre register now</button>
        </div>
        <div className="cardlanding container mt-5">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <img src={Images.truckyellow} class="card-img" alt="..." />
                  <p class="card-text">
                    With TransWeGo, if you're transporting a vehicle over 50km,
                    you no longer have to pay for the transporter’s return
                    journey. Our platform helps you connect with another user
                    who needs a vehicle transported back from your destination,
                    allowing both parties to share the costs and save money.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Smart Matching</h5>
                  <img src={Images.truckyellow} class="card-img" alt="..." />
                  <p class="card-text">
                    Our intuitive system matches you with other users whose
                    transportation needs complement yours. This not only splits
                    your costs but also maximizes the efficiency of each
                    journey.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Simplified Logistics</h5>
                  <img src={Images.truckyellow} class="card-img" alt="..." />
                  <p class="card-text">
                    Manage all your transport needs through our user-friendly
                    app that offers transparency, control, and hassle-free
                    coordination of your trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text container mt-5">
          <div class="row">
            <div class="col-12 ">
              <p>
                Become a part of our community today. Register now to access
                early benefits and redefine the way you think about vehicle
                transportation.
              </p>
            </div>
            <div class="col-12 text-center btn-join">
              <button className="btn orange mt-5">Join the waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
