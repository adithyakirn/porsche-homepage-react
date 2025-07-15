import React, { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import './Hero.css'
import GotoButtons from '../Buttons/GotoButtons'

function Hero({ isCategoryOpen }) {

  const [videoPaused, setVideoPaused] = useState(false)
  const videoRef = useRef(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      if (window.innerWidth < 760) {
        hls.loadSource('https://videos.porsche.com/id/taycanbemob/hls.m3u8')
      }
      else {
        hls.loadSource('https://videos.porsche.com/id/taycanbepc/hls.m3u8')
      }
      hls.attachMedia(video)
      const handlePause = () => setVideoPaused(true)
      const handlePlay = () => setVideoPaused(false)

      video.addEventListener("pause", handlePause)
      video.addEventListener("play", handlePlay)

      return () => {
        video.removeEventListener("pause", handlePause)
        video.removeEventListener("play", handlePlay)
      }
    }
  }, [])
  const handlePlay = () => {
    const icon = document.querySelector(".icon-container")
    const video = videoRef.current
    !videoPaused ? icon.innerHTML = `<img src="https://cdn.ui.porsche.com/porsche-design-system/icons/play.24226d4.svg" width="24" height="24" loading="lazy" alt="">` : icon.innerHTML = `<img src="https://cdn.ui.porsche.com/porsche-design-system/icons/pause.e41b935.svg" width="24" height="24" loading="lazy" alt=""></img>`
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }


  return (
    <>
      <div className={`home-hero-section ${isCategoryOpen ? "blur" : ""}`}>
        <div className="hero-container">
          <div className="hero-video-container">
            <div className="hero-video">
              <video ref={videoRef} className="hero-video-Video" crossOrigin="anonymous" autoPlay playsInline muted loop />
            </div>
          </div>
        </div>
        <div className="hero-header-container">
          <h1 className="hero-header">Soul in every detail.</h1>
        </div>
        <GotoButtons />
        <div className="small-description-item">
          {/* <p className="small-description text-center font-normal text-xs z-[<3>]">
            Fuel consumption combined (model range): 10.9 – 10.8 l/100 km (preliminary value), CO₂-emissions combined (model range): 248 – 244 g/km (preliminary value)
            </p> */}
        </div>
        <div className="video-pause-play-button" id="pause-play-button">
          <button onClick={handlePlay} className="video-play_pause-button outline-transparent bg-transparent rounded-sm cursor-pointer p-[<0>]">
            <p className="icon-container inline-block ">
              <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/pause.e41b935.svg" width="24" height="24" loading="lazy" alt=""></img>
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero

// * height issue is there on css 221 video-play_pause-button ✔️
// * dark fade ending in the 32 home-hero-section::after should be fixed ✔️