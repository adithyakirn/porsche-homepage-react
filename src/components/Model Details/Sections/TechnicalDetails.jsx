import React from "react";

function TechnicalDetails({res}) {
  return (
    <section className="top-speed-section bg-white mx-auto min-w-0 max-w-full grid ">
      <div className="speed-power-section">
        <div className="_0-100-section whitespace-nowrap text-center text-[#010205] font-[reg] inline-block h-full w-full">
          <div className="_0-100-in-text inline-flex flex-row items-baseline flex-wrap h-full w-full gap-[clamp(4px,_.25vw_+_3px,_8px)] leading-none align-top text-[clamp(2.03rem,_3.58vw_+_1.31rem,_5.61rem)] relative">
            <span className="animated_0-100-text-wrapper justify-center absolute inline-flex top-0 right-0 left-0 bottom-0">
              <span
                className="animated-scroller-text flex flex-col h-[1lh] transition-[transform_1200ms_cubic-bezier(.2,.1,.2,1)_0s]"
                data-aos="custom-scroll"
              >
                <span
                  className="scroller-text h-full flex-[0_0_100%] flex"
                  data-digit={res.listHead1}
                ></span>
              </span>
            </span>
          </div>
          <div className="_0-100-description text-[1rem] mt-[.3em] text-[#6b6d70] leading-[calc(6px+2.125ex)] text-balance">
            {res.listsSub1}
          </div>
          <div className="power-section mt-[clamp(32px,2.75vw+23px,76px)] text-center">
            <div className="_0-100-section text-center text-[#010205] font-[reg] inline-block h-full w-full">
                  <div className='text-[#010205] flex-[0_0_100%] flex justify-center text-[clamp(2.03rem,3.58vw+1.31rem,5.61rem)]'>
                  {res.listHead2}
                  </div>
              <div className="_0-100-description text-[1rem] mt-[1.5rem] text-[#6b6d70] leading-[calc(6px+2.125ex)] text-balance">
                    {res.listsSub2}
              </div>
            </div>
          </div>
          <div className="power-section mt-[clamp(32px,2.75vw+23px,76px)] text-center">
              <div className="_0-100-in-text inline-flex flex-row items-baseline flex-wrap h-full w-full gap-[clamp(4px,_.25vw_+_3px,_8px)] leading-none align-top text-[clamp(2.03rem,_3.58vw_+_1.31rem,_5.61rem)] relative">
                <span className="animated_0-100-text-wrapper justify-center absolute inline-flex top-0 right-0 left-0 bottom-0">
                  <span className="animated-scroller-text flex flex-col h-[1lh] transition-[transform_1200ms_cubic-bezier(.2,.1,.2,1)_0s] delay-75"data-aos="custom-scroll">
                      {res.listHead3}
                  </span>
                </span>
              </div>
          </div>
          <div className="_0-100-description text-[1rem] mt-[.3em] text-[#6b6d70] leading-[calc(6px+2.125ex)] text-balance">
                    {res.listsSub3}
          </div>
        </div>
      </div>
      <div className="model-car-image-container flex items-center">
        <picture>
          <img
            style={{ aspectRatio: 1720 / 1210 }} className="max-w-full block h-auto" src={res.frontImage} alt={`Front View OF ${res.name}`} width="1720" height="1210" loading="lazy" fetchPriority="auto"/>
        </picture>
      </div>
      <div className="change-model-button inline-block align-top rounded-[4px] outline-0 col-span-[basic-start/basic-end]">
        <button className="configure-model">
          <span className="label">View all technical details</span>
        </button>
      </div>
    </section>
  );
}

export default TechnicalDetails;
