import React, { useEffect } from "react";
import "../ModelDetails.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ModelSpeednPower from "./ModelSpeednPower";
import TechnicalDetails from "./TechnicalDetails";
import SmallNote from "./SmallNote";
import VehicleSpec from "./VehicleSpec";

function DetailsMain() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <main className="main-models-section">
        <ModelSpeednPower />
        <TechnicalDetails />
        <SmallNote/>
        <VehicleSpec/>
      </main>
    </>
  );
}

export default DetailsMain;
