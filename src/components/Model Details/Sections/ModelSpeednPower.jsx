import React, { useState } from "react";
import { Link } from "react-router-dom";

function ModelSpeednPower({ res,isFilterOpen, setIsFilterOpen }) {
  return (
    <section className="models-overview-section bg-transparent mx-auto min-w-0 max-w-full">
      <div className="model-overview-wrapper grid bg-transparent text-[#010205] min-w-[320px]">
        <div className="model-shadow-container"></div>
        <div className="model-name-container">
          <p-model-signature className="model-image-name" style={{ maskImage: `url(${res.modelImage})`, WebkitMaskImage: `url(${res.modelImage})`, maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'left top', maskSize: 'contain' }}>
            <img src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg" alt="911" />
          </p-model-signature>
        </div>
        <div className="car-model-images">

          <img
            src={res.image} width="2560" height="697" srcSet={res.srcSet} sizes="(min-width: 1920px) 1311px,(min-width: 760px) 70vw,85vw" alt="Porsche 911 Carrera S in Ice Grey Metallic in profile/side view." loading="eager" fetchPriority="high" />
        </div>
        <div className="model-details-container flex flex-col items-center">
          <div>
            <h1 className="model-name-text m-0 text-[#010205] text-center">
              {res.name}
            </h1>
            <div className="model-tag flex justify-center mt-[4px] mb-[8px]">
              <p-tag className="inline-flex align-top whitespace-nowrap">
                <span>{res.tag}</span>
              </p-tag>
            </div>
          </div>
          <p-button-group className="model-button-group flex items-stretch" onClick={() => setIsFilterOpen(prev => !prev)}>
            <div className="change-model-button inline-block align-top rounded-[4px] outline-0">
              <button className="change-model">
                <span className="label" >Change model</span>
              </button>
            </div>
            <div className="change-model-button inline-block align-top rounded-[4px] outline-0">
              <button className="configure-model">
                <span className="label">Configure</span>
              </button>
            </div>
          </p-button-group>
          <p className="model-about-text text-center">
            Fuel consumption combined (model range): 10.7 – 10.2 l/100 km,
            CO₂-emissions combined (model range): 244 – 232 g/km
          </p>
        </div>
      </div>
    </section>
  );
}

export default ModelSpeednPower;
