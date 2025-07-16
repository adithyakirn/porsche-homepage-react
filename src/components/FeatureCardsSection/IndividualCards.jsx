import React, { useEffect, useState } from "react";
import "./Cards.css";
function IndividualCards() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/JSON/cards.json");
        const result =await data.json();
        setRes(result);
      } 
      catch (error) {
        return () => console.warn(error);
      }
    }
    fetchData()
  }, []);
  return (
    <>
      {res.map((el) => (
        <div className="individual-cards-container block" id={el.id} key={el.id}>
          <div className="individual-image-container relative">
            <a href={el.a} className="w-full !h-full absolute"></a>
            <img
              src={el.src}
              srcSet={el.srcSet}
              sizes={el.sizes}
              alt={el.alt}
              fetchPriority="auto"
              height="1920"
              width="2560"
              loading="lazy"
              style={{ aspectRatio: "2560 / 1920" }}
            />
          </div>
          <div className="card-text-container">
            <p>{el.name}</p>
            <div className="arrow-button inline-block w-auto align-top outline-0">
              <div className="root">
                <span className="icon">
                  <img
                    src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-right.872716b.svg"
                    width="24"
                    height="24"
                    loading="lazy"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default IndividualCards;
