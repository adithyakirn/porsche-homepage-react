import "./carmodels.css"
import Hls from "hls.js"

import React, { useEffect, useState, useRef } from 'react'

function IndividualCars() {
  const [res, setRes] = useState([])
  const videoRef = useRef(null)
  const [selectedCar, setSelectedCar] = useState(null)

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

  useEffect(() => {
    if (!selectedCar) return;

    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(selectedCar.video);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = selectedCar.video;
    }
  }, [selectedCar]);

  return (
    <>
      {selectedCar && (
        <div className="selected-car-video">
          <video
            ref={videoRef}
            controls
            poster={selectedCar.poster}
            className="w-full max-w-screen-md mx-auto"
          />
        </div>
      )}
      <ul className="car-models-container grid">
        {res.map((el) => (
          <li className="individual-cars-container" key={el.id}>
            <button
              className="individual-cars-button flex justify-center p-[0 cursor-pointer"
              onClick={() => setSelectedCar(el)}
            >
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