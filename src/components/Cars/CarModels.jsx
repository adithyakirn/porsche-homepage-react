import React from 'react'
import "./model.css"
function CarModels({ closeHandler }) {
  return (
    <>
      <div className="car-models-wrapper">
        <div className="category-container box-border sticky bg-white z-50 block">
          <div className="close-icon-container sticky flex items-center justify-between">
            <div className="back-arrow-container flex break wrap-break-word align-top outline-0 w-auto">
              <button className="root">
                <div className="icon">
                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-left.e03c25b.svg" width="24" height="24" loading="lazy" alt=""></img>
                </div>
              </button>
            </div>
            <div className="models-header-container items-center flex flex-col">
            <h2 className="root">Models</h2>
            </div>
            <div className="mobile-close-button-container inline-block outline-0 w-auto align-top">
              <div className="close-button-container flex w-full p-0 m-0 decoration-0 wrap-break-word hyphens-auto gap-0 content-start text-start border-0 cursor-pointer text-base">
                <div onClick={closeHandler} className="icon-close relative shrink-0 inline-block align-top ">
                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg" width="24" height="24" loading="lazy" alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="models-container pb-[4rem] block box-border">
              <CarModels/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarModels