import React from "react";
import "../style.scss";
import { Images } from "../../../utils/images";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
      <div className="landingPage">
        <div className="text-center logo">
          <img
            src={Images.logolanding}
            className="img-fluid"
            alt="TransWeGo Logo"
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
          <button
            className="btn orange mt-5"
            onClick={() => navigate("/signup")}
          >
            pre register now
          </button>
        </div>
        <div className="cardLanding container mt-5">
          <div className="row">
            {/* <Card
            title="Special title treatment"
            imgSrc={Images.truckyellow}
            text="With TransWeGo, if you're transporting a vehicle over 50km,
              you no longer have to pay for the transporter’s return
              journey. Our platform helps you connect with another user
              who needs a vehicle transported back from your destination,
              allowing both parties to share the costs and save money."
          />
          <Card
            title="Smart Matching"
            imgSrc={Images.mobilegroup}
            text="Our intuitive system matches you with other users whose
              transportation needs complement yours. This not only splits
              your costs but also maximizes the efficiency of each
              journey."
          />
          <Card
            title="Simplified Logistics"
            imgSrc={Images.mobile2}
            text="Manage all your transport needs through our user-friendly
              app that offers transparency, control, and hassle-free
              coordination of your trips."
          /> */}

            <div className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">
                      Cost-Effective Travel Solutions
                    </h5>
                  </div>
                  <div className="card-img">
                    <img
                      src={Images.truckyellow}
                      alt={"Special title treatment"}
                      className="truckyellow"
                    />
                  </div>
                  <p className="card-text mt-3">
                    With TransWeGo, if you're transporting a vehicle over 50km,
                    you no longer have to pay for the transporter’s return
                    journey. Our platform helps you connect with another user
                    who needs a vehicle transported back from your destination,
                    allowing both parties to share the costs and save money.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">Smart Matching</h5>
                  </div>
                  <div className="card-img">
                    <img
                      src={Images.mobilegroup}
                      alt={"Smart Matching"}
                      className="mobilegroup"
                    />
                  </div>
                  <p className="card-text mt-3">
                    Our intuitive system matches you with other users whose
                    transportation needs complement yours. This not only splits
                    your costs but also maximizes the efficiency of each
                    journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">Simplified Logistic</h5>
                  </div>
                  <div className="card-img">
                    <img
                      src={Images.mobile2}
                      alt={"Simplified Logistic"}
                      className="mobile2"
                    />
                  </div>
                  <p className="card-text mt-3">
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
          <div className="row">
            <div className="col-12">
              <p>
                Become a part of our community today. Register now to access
                early benefits and redefine the way you think about vehicle
                transportation.
              </p>
            </div>
            <div className="col-12 text-center btn-join">
              <button
                className="btn orange mt-5"
                onClick={() => navigate("/signup")}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
