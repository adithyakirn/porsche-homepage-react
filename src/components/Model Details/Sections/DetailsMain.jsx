import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ModelDetails.css";
import ModelSpeednPower from "./ModelSpeednPower";
import TechnicalDetails from "./TechnicalDetails";
import SmallNote from "./SmallNote";
import VehicleSpec from "./VehicleSpec";

function DetailsMain() {
  const { model } = useParams();
  const [res, setRes] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
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
        const url = modelMap[model];
        if (!url) return;
        const response = await fetch(url);
        const json = await response.json();
        setRes(json.length ? json[0] : {});
      }
      catch (error) {
        console.error("Error fetching model data:", error);
      }
    }
    fetchData();
  }, [model]);
  console.log("ModelSpeednPower res:", res);
  return (
    <>
      <main className="main-models-section">
        {res && <ModelSpeednPower res={res} />}
        {res && <TechnicalDetails res={res} />}
        <SmallNote />
        <VehicleSpec />
      </main>
    </>
  );
}

export default DetailsMain;
