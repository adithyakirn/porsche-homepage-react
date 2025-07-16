import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ModelDetails.css";
import ModelSpeednPower from "./ModelSpeednPower";
import TechnicalDetails from "./TechnicalDetails";

function DetailsMain() {
  const { model } = useParams();
  const [res, setRes] = useState([]);
useEffect(() => {
  async function fetchData() {
    const modelMap = {
      "1": "/JSON/911 Models/911CarreraModels.json",
      "2": "/JSON/911 Models/911CarreraCabriolet.json",
      "3": "/JSON/911 Models/911Targa.json",
      "4": "/JSON/911 Models/911GT3.json",
      "5": "/JSON/911 Models/911Spirit70.json",
      "6": "/JSON/911 Models/911GT3RS.json",
      "7": "/JSON/911 Models/911Turbo50Years.json",
      "8": "/JSON/911 Models/911TurboCoupé.json",
      "9": "/JSON/911 Models/911TurboCabriolet.json",
      "10": "/JSON/718 Models/718Models.json",
      "11": "/JSON/718 Models/718CaymanGT4RS.json",
      "12": "/JSON/718 Models/718SpyderRS.json",
      "13": "/JSON/Taycan Models/Taycan.json",
      "14": "/JSON/Panamera models/panameraModels.json",
      "15": "/JSON/Panamera models/panameraExecutive.json",
      "16": "/JSON/Macan Models/MacanModels.json",
      "17": "/JSON/Cayenne Models/cayenneModels.json",
      "18": "/JSON/Cayenne Models/cayenneCoupe.json",
    };

    for (const key in modelMap) {
      const url = modelMap[key];
      try {
        const response = await fetch(url);
        const data = await response.json();
        const match = data.find(item => item.id === model);
        if (match) {
          setRes(match);
          break;
        }
      } catch (error) {
        console.error("Error fetching model data:", error);
      }
    }
  }

  fetchData();
}, [model]);
  console.log(model)
  return (
    <>
      <main className="main-models-section">
        {res && <ModelSpeednPower res={res} />}
        {res && <TechnicalDetails res={res} />}
        {/* <SmallNote /> */}
        {/* <VehicleSpec /> */}
      </main>
    </>
  );
}

export default DetailsMain;
