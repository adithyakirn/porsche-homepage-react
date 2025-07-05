import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import './Hero.css'
import GotoButtons from '../Buttons/GotoButtons'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource('https://videos.porsche.com/id/911targa4smob/hls.m3u8')
      hls.attachMedia(videoRef.current)
    }
  }, [])

  return (
    <div className="home-hero-section">
      <div className="hero-container">
        <div className="hero-image-container hide-hero">
                <picture>
                <source media="(max-width: 479px)" srcset="https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=479&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=479&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="760" height="1350"></source>
                <source media="(max-width: 759px)" srcset="https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=759&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=759&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="760" height="1350"></source>
                <source media="(max-width: 999px)" srcset="https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=999&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/0862AB4D677348AC90AED27D3BC60AEB_B596D2B5A2AC4ADFA6584275643B0FB5_00---911-Targa-4S---fallback---Mobile?iar=0&amp;w=999&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="760" height="1350"></source>
                <source media="(max-width: 1299px)" srcset="https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1299&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1299&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="3840" height="2880"></source>
                <source media="(max-width: 1759px)" srcset="https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1759&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1759&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="3840" height="2880"></source>
                <source media="(max-width: 1919px)" srcset="https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1919&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1919&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="3840" height="2880"></source>
                <source media="(min-width: 1920px)" srcset="https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=2500&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=2500&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="3840" height="2880"></source>
                <img src="https://porsche.imgix.net/-/media/DAF6D2515C624F1EA3DC43C8AD027044_3569D0F4A9D3496DAF7AD2E70F9E2B0D_00---911-Targa-4S---fallback---Desktop_new?iar=0&amp;w=1299&amp;ar=4%3A3&amp;q=85&amp;auto=format" width="3840" height="2880" alt="Porsche 911 Targa 4S in Shade Green Metallic. Side view." class="PcomPicture__root__18b61 PcomPicture__fit-cover__18b61 PcomPicture__layout-fit-container__18b61" fetchpriority="high" loading="eager"></img>
                </picture>
                </div>
        <div className="hero-video-container">
          <div className="hero-video">
            <video ref={videoRef} className="hero-video-Video" crossOrigin="anonymous" autoPlay playsInline muted loop controls />
          </div>
        </div>
      </div>
        <div className="hero-header-container">
          <h1 className="hero-header">Thrill of the 911.</h1>
        </div>
        <GotoButtons/>
    </div>
  )
}

export default Hero