
import "./StartYourJourney.css"
import IndividualArticles from './IndividualArticles'
import { useState } from "react"

function StartYourJourney() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <section className="start-journey-secion relative m-[0px auto] p-[clamp(80px,7.5vw + 56px,200px)] max-w-[1880px]">
                <h2 className="section-header m-0 text-start p-0 text-size-med">
                    <span className="section-header-text">Your Porsche journey starts now.</span>
                </h2>
                <div className="car-about-video-section">
                    <p className="tab-hidden m-[100px]"></p>
                    <IndividualArticles />
                </div>
            </section>
            <div className="video-controller items-center flex justify-center m-[15px 0 0 0]">
                <div className="videoCategory-wrapper bg-[#9495992e] rounded-4x1 flex h-10 mr-[6px] p-3 place-content-[center, space-between] w-[135px] justify-between items-center">
                    <div className="progres-outer slider bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]">
                        <div className="progress-bar rounded-[10px] w-[35px] bg-white h-[10px]"></div>
                    </div>
                    <div className="progres-outer bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]"></div>
                    <div className="progres-outer bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]"></div>
                    <div className="progres-outer bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]"></div>
                    <div className="progres-outer bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]"></div>
                    <div className="progres-outer bg-[#d7d7da59] rounded-[100%] cursor-pointer flex h-[10px] w-[10px]"></div>
                </div>
                <button onClick={() => setToggle(t => !t)} className="play_pause-button rounded-[10px] cursor-pointer">
                    <div className="play-pause items-center bg-[#9495992e] rounded-[50%] flex h-[40px] justify-center w-[40px]">
                        <span className="pl-[2px] inline-block align-top icon">
                            {toggle ? (
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/pause.e41b935.svg" width="24" height="24" alt="Pause" />
                            ) : (
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/play.24226d4.svg" width="24" height="24" alt="Play" />
                            )}
                        </span>
                    </div>
                </button>
            </div>
        </>
    )
}

export default StartYourJourney 