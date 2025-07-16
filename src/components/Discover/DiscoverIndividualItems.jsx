import React, { useEffect, useState } from 'react'
import "./Discover.css"
function DiscoverIndividualItems() {
const [res,setRes] = useState()

useEffect(() => {
  async function fetchData(){
    try{
        const data = await fetch("JSON/discover.json")
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
    res?.map((el, i) => (
      <div key={i} className="individual-items-discover">
        <div className="discover-tile grid round-[12px] overflow-hidden relative scale-[1]">
          <div className="container">
            <div className="picture-container">
              <picture>
                <source media="(max-width: 479px)" srcSet={el.source1} width="1920" height="1080" />
                <source media="(max-width: 759px)" srcSet={el.source2} width="1920" height="1080" />
                <source media="(max-width: 999px)" srcSet={el.source3} width="1920" height="1080" />
                <source media="(max-width: 1299px)" srcSet={el.source4} width="1200" height="1200" />
                <source media="(max-width: 1759px)" srcSet={el.source5} width="1200" height="1200" />
                <source media="(max-width: 1919px)" srcSet={el.source6} width="1200" height="1200" />
                <source media="(min-width: 1920px)" srcSet={el.source7} width="1200" height="1200" />
                <img src={el.img} width="1200" height="1200" alt={el.alt} className="PcomPicture__root__18b61" fetchPriority="auto" loading="lazy" />
              </picture>
            </div>
            <div className="discover-footer">
              <p>{el.name}</p>
              <span className="icon">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-right.872716b.svg" width="24" height="24" loading="lazy" alt=""/>
              </span>
            </div>
          </div>
        </div>
      </div>
    ))
  )
}

export default DiscoverIndividualItems