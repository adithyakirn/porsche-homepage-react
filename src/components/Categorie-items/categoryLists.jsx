import React, { useState, useEffect } from 'react'

function CategoryLists({ Purchase ,Services, Expirience}) {
  const [objects, setObjects] = useState([])

  useEffect(() => {
    setObjects([{
      vehiclePurchase: ["Configure", "Compare Models", "Find New and Pre-owned Vehicles", "E-Mobility & E-Performance"],
      services: ["Services & Miantanance", "Vehicle Accessories", "Individulisation", "Classic-Service & Parts", "Appreved - Pre-Owned Cars & Warranty"],
      expirience: ["Motosport", "Porsche Experiense - Driving & Trach Experience", "Porsche Communities", "Golf Sports", "Stories - People. Passion. Places", "Christophorus - The Porsche Magazine", "Visit the Museum & Factory"]
    }])
  }, [])

  return (
    <div className="individual-lists block box-border">
      <ul className="individual-unorderedlist p-0 m-0">
        {objects.map((el, idx) => (
          <React.Fragment key={`object-${idx}`}>
            {Purchase && el.vehiclePurchase.map((item) => (
              <li key={`purchase-${item}`} className="cat-lists m-0 list-none flex justify-between items-center">
                {item}
              </li>
            ))}
            {Services && el.services.map((item) => (
              <li key={`service-${item}`} className="cat-lists m-0 list-none flex justify-between items-center">
                {item}
              </li>
            ))}
            {Expirience && el.expirience.map((item) => (
              <li key={`experience-${item}`} className="cat-lists m-0 list-none flex justify-between items-center">
                {item}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default CategoryLists
