import React, { useState } from 'react'
import "./Category.css"
import IndividualItems from '../Categorie-items/individualItems'
import CarModels from '../Cars/CarModels'
import CategoryLists from '../Categorie-items/categoryLists'
function CategoryMenu({ isVisible, closeHandler }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <CarModels
        isVisible={activeCategory === "models"}
        closeHandler={() => setActiveCategory(null)}
        heading="Models"
        Models={true}
      />

      <CarModels
        isVisible={activeCategory === "purchase"}
        closeHandler={() => setActiveCategory(null)}
        heading="Vehicle Purchase"
        Purchase={true}
      />

      <CarModels
        isVisible={activeCategory === "services"}
        closeHandler={() => setActiveCategory(null)}
        heading="Services"
        Services={true}
      />

      <CarModels
        isVisible={activeCategory === "experience"}
        closeHandler={() => setActiveCategory(null)}
        heading="Experience"
        Expirience={true}
      />
      <div className={`category-main-container absolute cursor-pointer block ${isVisible ? "category-visible" : "category-hidden"}`}>
        <div className="category-container box-border sticky bg-white z-50 block">
          <div onClick={closeHandler} className="close-icon-container sticky flex items-center justify-between">
            <div className="spacer"></div>
            <div className="mobile-close-button-container inline-block outline-0 w-auto align-top">
              <div className="close-button-container flex w-full p-0 m-0 decoration-0 wrap-break-word hyphens-auto gap-0 content-start text-start border-0 cursor-pointer text-base">
                <div onClick={closeHandler} className="icon-close relative shrink-0 inline-block align-top ">
                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg" width="24" height="24" loading="lazy" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-category-list block box-border">
          <IndividualItems itemName="Models" onClick={() => setActiveCategory("models")} />
          <IndividualItems itemName="Vehicle Purchase" onClick={() => setActiveCategory("purchase")} />
          <IndividualItems itemName="Services" onClick={() => setActiveCategory("services")}/>
          <IndividualItems itemName="Experience" onClick={() => setActiveCategory("experience")} />
          <IndividualItems itemName="Find a Dealer" noArrow={true} />
        </div>
      </div>
    </>
  )
}

export default CategoryMenu