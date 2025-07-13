import React, { useState } from 'react'
import "../../ModelOverview/ModelOverview.css"
import OverviewIndividualItems from './OverviewIndividualItems'
import FilterMenu from '../ModelMenu/FilterMenu'
import CarModelSection from './CarModelSelection'

function MainSection({ id }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const carSections = [
        { title: "911 Carrera Models", modelId: "1", group: "911" },
        { title: "911 Carrera Cabriolet Models", modelId: "2", group: "911" },
        { title: "911 Targa Models", modelId: "3", group: "911" },
        { title: "911 GT3 Models", modelId: "4", group: "911" },
        { title: "911 Spirit 70", modelId: "5", group: "911" },
        { title: "911 GT3 RS", modelId: "6", group: "911" },
        { title: "911 Turbo 50 Years", modelId: "7", group: "911" },
        { title: "911 Turbo Coupé Models", modelId: "8", group: "911" },
        { title: "911 Turbo Cabriolet Models", modelId: "9", group: "911" },

        { title: "718 Cayman GT4 RS", modelId: "10", group: "718" },
        { title: "718 Models", modelId: "11", group: "718" },
        { title: "718 Spyder RS", modelId: "12", group: "718" },

        { title: "Taycan", modelId: "13", group: "taycan" }
    ];
    return (
        <>
            <FilterMenu isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
            <main className="model-overview-main ml-auto mr-auto min-w-0 max-w-full">
                <div className="main-section bg-[#eeeff2] grid">
                    <h1 className="model-header m-o text-[#010205] text-start ">Model overview</h1>
                    <div className="filter-button-container sticky top-0 z-[1]">
                        <button className='filter-button' onClick={() => setIsFilterOpen(prev => !prev)}>Filter</button>
                    </div>
                    {carSections
                        .filter(section => section.group === id)
                        .map(({ title, modelId }) => (
                            <CarModelSection key={modelId} title={title} modelId={modelId} />
                        ))}
                </div>
            </main>
        </>
    )
}

export default MainSection