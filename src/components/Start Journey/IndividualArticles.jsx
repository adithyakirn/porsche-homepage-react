import { useEffect, useState } from "react";
import "./StartYourJourney.css";
function IndividualArticles() {
    const [res, setRes] = useState([])
    useEffect(() => {
        async function fetchData() {
            try{
                const data =  await fetch("JSON/carVideos.json")
                const res = await data.json()
                setRes(res)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])
    return (
        <>
          {res.map((el) => (
            <article className="car-about-container" key={el.id} id={el.id}>
              <p className={`car-modelName-container icon-container ${el.icon}`}>
              </p>
              <div className="car-video-container">
                  <div className="video-container">
                      <div className="video-wrapper overflow-hidden box-border">
                          <video
                              data-poster={el.poster}
                              crossOrigin="anonymous"
                              className="w-full border-0 h-full absolute top-0 left-0 object-cover" autoPlay muted loop
                              aria-label="Several 911 models are driving on a road. Different perspectives of the models are shown.">
                              <source src={el.video}></source>
                          </video>
                          <div className="about-container justify-center bottom-0 box-border flex-col flex z-20 w-full absolute">
                              <div className="tagline flex gap-[clamp(4px,.25vw + 3px,8px)] w-full">
                                  <p className={`tag align-top text-nowrap ${el.tag ? "inline-flex" : "hidden"}`}>
                                      <span>{el.tag}</span>
                                  </p>
                              </div>
                              <p className="about-text">
                                  {el.abouttext}
                              </p>
                              <p className="explore-container inline-block w-auto align-top outline-0">
                                  <a href="#" className="root">
                                  Explore
                              <p-icon className="icon">
                                  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-right.872716b.svg" width="24" height="24" loading="lazy" alt=""></img>
                              </p-icon>
                              </a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            </article>
          ))}
        </>
      );
}

export default IndividualArticles;
