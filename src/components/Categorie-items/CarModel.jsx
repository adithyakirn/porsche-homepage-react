import "./carmodels.css"

import React, { useState } from 'react'

function CarModel() {
    const [res,setRes] = useState([])
    async function fetchData() {
        try{
            const data = fetch("JSON/models.json")
            setRes(data.json())
        }
        catch(error){
            console.error(error);
        }
    }
    fetchData()
  return (
    <>
        <ul className="car-models-container grid">
    {res.forEach((el) => {
            <li className="car-models flex justify-center cursor-pointer items-start bg-[#eeeff2]" key={el.id}>
                <div className="car-models-wrapper flex flex-col items-start">
                    <div className="modelname-container">
                        <h3 className="root">{el.model}</h3>
                    </div>
                </div>
            </li>
    })}
    </ul>
    </>
  )
}

export default CarModel