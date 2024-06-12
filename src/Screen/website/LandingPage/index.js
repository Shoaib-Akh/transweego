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
        <h3>Willkommen bei TransWeGo          </h3>
        <h1>Bereit, fertig, los zum Transport!</h1>
        <p className="w-75 mx-auto">
          Bei TransWego revolutionieren wir den Fahrzeugtransport. Unser neues Kostenteilungs-Feature ermöglicht es dir, Transportkosten zu senken und gleichzeitig die Umwelt zu schonen. Verpasse nicht die Chance, als einer der Ersten dabei zu sein und exklusive Vorteile zu geniessen.

        </p>
        <button
          className="btn orange mt-5"
          onClick={() => navigate("/signup")}
        >
          Vorabregistrieren
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
                    Kosten
                    teilen
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
                  Mit TransWeGo müssen Sie, wenn Sie ein Fahrzeug über 50 km transportieren, nicht mehr für die Rückfahrt des Transporters bezahlen. Unsere Plattform hilft Ihnen, sich mit einem anderen Benutzer zu verbinden, der ein Fahrzeug von Ihrem Zielort zurücktransportieren muss, sodass beide Parteien die Kosten teilen und Geld sparpren können.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">Intelligentes
                    Matching</h5>
                </div>
                <div className="card-img">
                  <img
                    src={Images.mobilegroup}
                    alt={"Smart Matching"}
                    className="mobilegroup"
                  />
                </div>
                <p className="card-text mt-3">
                  Unser intuitives System verbindet Sie mit anderen Benutzern, deren Transportbedürfnisse die Ihren ergänzen. Dies teilt nicht nur Ihre Kosten, sondern maximiert auch die Effizienz jeder Reise.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">Vereinfachte
                    Logistik</h5>
                </div>
                <div className="card-img">
                  <img
                    src={Images.mobile2}
                    alt={"Simplified Logistic"}
                    className="mobile2"
                  />
                </div>
                <p className="card-text mt-3">
                  Werden Sie noch heute Teil unserer Gemeinschaft. Registrieren Sie sich jetzt, um frühe Vorteile zu erhalten und die Art und Weise, wie Sie über Fahrzeugtransport denken, neu zu definieren.
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


              Werde noch heute Teil unserer Gemeinschaft. Registriere dich jetzt, um frühzeitige Vorteile zu nutzen und die Art und Weise, wie du über Fahrzeugtransporte denkst, neu zu definieren.

            </p>
          </div>
          <div className="col-12 text-center btn-join">
            <button
              className="btn orange mt-5"
              onClick={() => navigate("/signup")}
            >
              Vorabregistrieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;