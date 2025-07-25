import { NavLink } from "react-router-dom"
import "./carmodels.css"

import React, { useEffect, useState } from 'react'
import { useLoading } from "../Loading/LoadingContext";

function IndividualCars() {
      const { setIsLoading } = useLoading();
  const [res, setRes] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch("/JSON/models.json")
        const data = await response.json()
        setRes(data)
      } catch (error) {
        console.log(error)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <ul className="car-models-container grid">
        {res.map((el) => (
          <li className="individual-cars-container relative" key={el.id}>
            <button className="individual-cars-button flex justify-center p-[0 cursor-pointer">
              <div className="cars-container bg-[#eeeff2] cursor-pointer flex flex-col items-start">
                <div className="modelname-container block">
                  <h3 className="modelname root">{el.model}</h3>
                </div>
                <div className="carImage-container relative overflow-hidden block box-border">
                  <div className="carImgae absolute overflow-hidden flex justify-center items-center ">
                    <NavLink to={el.a || "#"} className="absolute w-full h-full">
                      <img className="carImage-img relative object-cover" src={el.image} alt="" />
                    </NavLink>
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