import React, { useState } from "react";
import { Link } from "react-router-dom";

function ModelSpeednPower() {
  const [selectedTab, setSelectedTab] = useState("");
  const tabs = [
    "Coupé",
    "Cabriolet",
    "Targa",
    "GT",
    "Turbo Coupé",
    "Turbo Cabriolet",
  ];
  return (
    <section className="models-overview-section bg-transparent mx-auto min-w-0 max-w-full">
      <div className="model-overview-wrapper grid bg-transparent text-[#010205] min-w-[320px]">
        <div className="model-shadow-container"></div>
        <div className="model-name-container">
          <p-model-signature className="model-image-name">
            <img
              src="https://cdn.ui.porsche.com/porsche-design-system/model-signatures/911.b68f913.svg"
              alt="911"
            ></img>
          </p-model-signature>
        </div>
        <div className="car-model-images">
          <img
            src="https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=2560&amp;h=697&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format"
            width="2560"
            height="697"
            srcSet="https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=600&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format 600w,https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=1200&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format 1200w,https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=1800&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format 1800w,https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=2400&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format 2400w,https://images-porsche.imgix.net/-/media/243EAB8F810C4DE395A5DD4C0D154B9F_197D59EBE2B0444DAD1D8C930220A2FC_CZ26W03IX0010-911-carrera-s-side?w=2800&amp;q=45&amp;crop=faces%2Centropy%2Cedges&amp;auto=format 2800w"
            sizes="(min-width: 1920px) 1311px,(min-width: 760px) 70vw,85vw"
            alt="Porsche 911 Carrera S in Ice Grey Metallic in profile/side view."
            loading="eager"
            fetchPriority="high"
            style={{ aspectRatio: 2560 / 697 }}
          ></img>
        </div>
        <div className="model-details-container flex flex-col items-center">
          <div>
            <h1 className="model-name-text m-0 text-[#010205] text-center">
              911 Carrera S
            </h1>
            <div className="model-tag flex justify-center mt-[4px] mb-[8px]">
              <p-tag className="inline-flex align-top whitespace-nowrap">
                <span>Gasoline</span>
              </p-tag>
            </div>
          </div>
          <p-tab-bar className="sliding-model-selector order-[-1] block relative">
            <p-scroller className="scroller font-normal text-base">
              <div className="scroller-wrapper relative grid">
                <div className="scroll-area p-[4px]">
                  <div className="scroll-area-wrapper relative inline-flex min-h-[28px] min-w-full align-top rounded-[4px]">
                    {tabs.map((tab) => (
                      <Link
                        key={tab}
                        className="anchor"
                        onClick={() => setSelectedTab(tab)}
                        data-area-current={selectedTab === tab ? "true" : null}
                      >
                        {tab}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </p-scroller>
          </p-tab-bar>
          <p-button-group className="model-button-group flex items-stretch">
            <div className="change-model-button inline-block align-top rounded-[4px] outline-0">
              <button className="change-model">
                <span className="label">Change model</span>
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
