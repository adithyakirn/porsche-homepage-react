import React, { useState } from 'react'
import "./ModelSwitcher.css"
import { Link, useParams } from 'react-router-dom';
import CarModelSection from '../../ModelOverview/ModelMain/CarModelSelection';
function ModelSwitcher({setIsFilterOpen, isFilterOpen}) {
  const { group } = useParams();
  const tabs = [
    "Coupé",
    "Cabriolet",
    "Targa",
    "GT",
    "Turbo Coupé",
    "Turbo Cabriolet",
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const carSections = [
    { title: "911 Carrera Models", modelId: "1", group: "911" },
    { title: "911 Carrera Cabriolet Models", modelId: "2", group: "911" },
    { title: "911 Targa Models", modelId: "3", group: "911" },
    { title: "911 GT3 Models", modelId: "4", group: "911" },
    { title: "911 Spirit 70", modelId: "5", group: "911" },
    { title: "911 GT3 RS", modelId: "6", group: "911" },
    { title: "911 Turbo 50 Years", modelId: "7", group: "911" },
    { title: "911 Turbo Coupé Models", modelId: "8", group: "911" },
    { title: "911 Turbo Cabriolet Models", modelId: "9", group: "911" },

    { title: "718 Cayman GT4 RS", modelId: "10", group: "718" },
    { title: "718 Models", modelId: "11", group: "718" },
    { title: "718 Spyder RS", modelId: "12", group: "718" },

    { title: "Taycan", modelId: "13", group: "taycan" },

    { title: "Panamera Models", modelId: "14", group: "panamera" },
    { title: "Panamera Executive Models", modelId: "15", group: "panamera" },

    { title: "Macan Electric Models", modelId: "16", group: "macan" },

    { title: "Cayenne Models", modelId: "17", group: "cayenne" },
    { title: "Cayenne Coupè Models", modelId: "18", group: "cayenne" },
  ];
  const filteredSections = carSections.filter(section => section.group === group);
  return (
    <>
      <div className={`model-switcher overflow-y-auto absolute "} ${isFilterOpen? "block" : "opacity-0"}`}>
        <p-close className="close-button inline-block align-top outline-0 rounded-[4px]" onClick={() => setIsFilterOpen(false)}>
          <button className="close">
            <p-icon className="icon inline-block align-top">
              <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg" width="24" height="24" loading="lazy" alt=""></img>
            </p-icon>
          </button>
        </p-close>
        <div className="switcher-header sticky top-[-.1px] transform-[translateZ(0px)] p-[16px_clamp(32px,23px+2.75vw,76px)] my-[0px-16px] bg-white transition-[box-shadow_0.25s_cubic-bezier(0.25,0.1,0.25,1)]">
          <div className="model-select-header items-center flex flex-col">
            <p-main-icon className="main-icon h-[35px] inline-block align-top max-w-[full] max-h-[100%] w-auto !aspect-[143/36] bg-[#010205]" style={{ mask: "url(https://cdn.ui.porsche.com/porsche-design-system/model-signatures/turbo.6a4084a.svg)" }}></p-main-icon>
          </div>
          <p-tab-bar className="sliding-model-selector flex justify-center pt-[32px] text-[rgb(1,_2,_5)]">
            <p-scroller className="scroller font-normal text-base">
              <div className="scroller-wrapper relative grid font-reg text-base font-[semi-bold]" style={{ lineHeight: "calc(2.125ex + 6px)" }}>
                <div className="scroll-area p-[4px]">
                  <div className="scroll-area-wrapper relative inline-flex min-h-[28px] min-w-full align-top rounded-[4px]">
                    {tabs.map((tab) => (
                      <Link key={tab} className="anchor" onClick={() => setSelectedTab(tab)} data-area-current={selectedTab === tab ? "true" : null}>{tab}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </p-scroller>
          </p-tab-bar>
          <div className="flex flex-col grow-[1] ">
            <div className="available-detals justify-center flex pb-(16px,1.25vw+12px,36px) gap-[clamp(8px,_.5vw+6px,16px)]">
              {/* <p className="!text-[#6b6d70] text-center font-[reg] m-0 font-[400] ![font-size:clamp(.81rem,.23vw+.77rem,.88rem)] [line-height:calc(6px+2.125ex)]">2 Models available</p> */}
            </div>
            {carSections
              .filter(({ title }) =>
                selectedTab === "" || title.toLowerCase().includes(selectedTab.toLowerCase())
              )
              .map(({ modelId }) => (
                <CarModelSection color={true} key={modelId} modelId={modelId} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ModelSwitcher