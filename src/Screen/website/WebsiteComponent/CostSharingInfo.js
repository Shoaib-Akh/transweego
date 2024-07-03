import React, { useState } from "react";
import "../../website/style.scss";

import { useNavigate } from "react-router-dom";
import { Images } from "../../../utils/images";

const CostSharingInfo = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState("cost");

  const handleItemClick = (item) => {
    setShowContent(item);
  };

  return (
    <>
      <div className="row d-flex">
        <div className="col-12">
          <div className="text mt-4">
            <p>How TransWeego Works</p>
            <h2>Lorem Ipsum is simply<br /> dummy text</h2>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div
            className={`col-2 mt-5 section-2 `}
            onClick={() => handleItemClick("cost")}
          >
            <div className="d-flex flex-column align-items-center">
            <div className={`bgColor mb-4  ${showContent === "cost" ? "active" : ""}`}>
                <img src={Images.cost} width="48" height="48" alt="car" />
              </div>
              <p className="img-text">Share your cost</p>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-end">
            <img src={Images.Vector3} alt="car" />
          </div>
          <div
            className={`col-2 mt-5 section-2`}
            onClick={() => handleItemClick("Earn")}
          >
            <div className="d-flex flex-column align-items-center">
              <div className={`bgColor mb-4  ${showContent === "Earn" ? "active" : ""}`}>
                <img src={Images.hand} width="48" height="48" alt="car" />
              </div>
              <p className="img-text">Earn as you drive</p>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-center" style={{ marginTop: "7%" }}>
            <img src={Images.Vector4} alt="car" />
          </div>
          <div
            className={`col-2 mt-5 section-2`}
            onClick={() => handleItemClick("Increase")}
          >
            <div className="d-flex flex-column align-items-center">
              <div className={`bgColor mb-4  ${showContent === "Increase" ? "active" : ""}`}>
                <img src={Images.spring} width="48" height="48" alt="car" />
              </div>
              <p className="img-text">Increase Visibility</p>
            </div>
          </div>
        </div>
      </div>

      {showContent === "cost" && (
        <div className="row px-4 py-5 my-5 mt-6r" style={{ backgroundColor: "#0C3227", borderRadius: "36px" }}>
          <div className="col-md-9">
            <h3 className="section-heading mb-4">Cost Sharing with TransWeego</h3>
            <p className="Sharing_para">
              Imagine you need to transport a vehicle from Geneva to Zurich. Traditionally, you bear the cost for both the journey and the return of the transporter. TransWeego changes the game with its cost-sharing functionality. By connecting with others who need a vehicle transported back from Zurich to Geneva, you can share the expenses, slashing your costs significantly. This feature is a game-changer for distances over 50km, turning one-way expenses into shared, cost-effective journeys.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Images.mask} alt="car" />
          </div>
        </div>
      )}

      {showContent === "Earn" && (
        <div className="row px-4 py-5 my-5 mt-6r" style={{ backgroundColor: "#0C3227", borderRadius: "36px" }}>
          <div className="col-md-9">
            <h3 className="section-heading mb-4">Earn as you drive</h3>
            <p className="Sharing_para">
              Earn as You Drive: Why travel empty-handed when you can earn? With TransWeego, every trip is an opportunity to make money. Whether you're driving from Bern to Zurich or any other route, our platform lets you find packages that need delivery to your destination. It's simple: you're heading there anyway, so why not carry a package and earn passive income? This service caters to all, from regular commuters to long-distance travelers.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Images.earn} alt="car" />
          </div>
        </div>
      )}

      {showContent === "Increase" && (
        <div className="row px-4 py-5 my-5 mt-6r" style={{ backgroundColor: "#0C3227", borderRadius: "36px" }}>
          <div className="col-md-9">
            <h3 className="section-heading mb-4">Increase Visibility</h3>
            <p className="Sharing_para">
              Indexing for Visibility: We're not just about individuals; TransWeego is a powerful tool for businesses too. Our indexing feature boosts visibility for vehicle transporters, towing services, animal transport companies, and package carriers. By listing on our platform, businesses gain exposure to a wide network of potential customers, enhancing their market presence and driving growth.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Images.increase} alt="car" />
          </div>
        </div>
      )}
    </>
  );
};

export default CostSharingInfo;
