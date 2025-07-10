import "./carmodels.css"

import React, { useEffect, useState } from 'react'

function IndividualCars() {
  const [res, setRes] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/JSON/models.json")
        const data = await response.json()
        setRes(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <ul className="car-models-container grid">
        {res.map((el) => (
          <li className="individual-cars-container" key={el.id}>
            <button className="individual-cars-button flex justify-center p-[0 cursor-pointer">
              <div className="cars-container bg-[#eeeff2] cursor-pointer flex flex-col items-start">
                <div className="modelname-container block">
                  <h3 className="modelname root">{el.model}</h3>
                </div>
                <div className="carImage-container relative overflow-hidden block box-border">
                  <div className="carImgae absolute overflow-hidden flex justify-center items-center ">
                    <img className="carImage-img relative object-cover" src={el.image} alt="" />
                  </div>
                </div>
                <div className="cartype-container block">
                  <div className="tag-container inline-flex align-top whitespace-nowrap">
                    <span>{el.type}</span>
                  </div>
                  {el.type2 && (
                    <div className="tag-container inline-flex align-top whitespace-nowrap">
                      <span>{el.type2}</span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndividualCars