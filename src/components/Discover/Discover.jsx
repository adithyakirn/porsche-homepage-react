import React from 'react'
import "./Discover.css"
import DiscoverIndividualItems from './DiscoverIndividualItems'
 function Discover() {
  return (
    <>
        <section className="discover-section ">
            <div className="discover-header-container">
                <h2 className="discover-text text-center">Discover</h2>
            </div>
            <div className="discover-items discover-header-containe">
                <DiscoverIndividualItems/>
            </div>
        </section>
    </>
  )
}

export default Discover