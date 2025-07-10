import React, { useState, useEffect } from 'react';
import "./model.css"
import IndividualCars from '../Categorie-items/IndividualCars'
import CategoryLists from '../Categorie-items/categoryLists'
function CarModels({ isVisible, closeHandler, heading, Models, Purchase, Services, Expirience }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasMounted(true)
      }, 10)
      return () => clearTimeout(timer)
    }
    else {
      setHasMounted(false)
    }
  }, [isVisible])

  return (
    <>
      <div className={`car-models-wrapper  absolute ${hasMounted ? 'model-visible' : "model-hidden"}`}>
        <div className="models-container box-border sticky bg-white z-50 block pt-[0px]">
          <div className="close-icon-container sticky flex items-center justify-between">
            <div className={`back-arrow-container flex break wrap-break-word align-top outline-0 w-auto ${hasMounted ? 'back-arrow-visible' : 'back-arrow-hidden'}`}>
              <button className="root" onClick={closeHandler} >
                <div className="icon_arrow">
                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-left.e03c25b.svg" width="24" height="24" loading="lazy" alt=""></img>
                </div>
              </button>
            </div>
            <div className="models-header-container items-center flex flex-col">
              <h2 className="root">{heading}</h2>
            </div>
            <div onClick={closeHandler} className="mobile-close-button-container inline-block outline-0 w-auto align-top">
              <div className="close-button-container flex w-full p-0 m-0 decoration-0 wrap-break-word hyphens-auto gap-0 content-start text-start border-0 cursor-pointer text-base">
                <div className="icon-close relative shrink-0 inline-block align-top ">
                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg" width="24" height="24" loading="lazy" alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="models-container pb-[4rem] block box-border">
            {Models && <IndividualCars />}
            {Purchase && <CategoryLists Purchase={true} />}
            {Services && <CategoryLists Services={true} />}
            {Expirience && <CategoryLists Expirience={true} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default CarModels               