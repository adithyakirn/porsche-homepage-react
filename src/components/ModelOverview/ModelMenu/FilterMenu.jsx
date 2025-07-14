

function FilterMenu({ setIsFilterOpen, isFilterOpen, radio, setRadio }) {
    const filterData = [
        { title: 911, models: 23 },
        { title: 718, models: 10 },
        { title: "All", models: 88 },
        { title: "Taycan", models: 22 },
        { title: "Panamera", models: 9 },
        { title: "Macan", models: 4 },
        { title: "Cayenne", models: 20 }
    ]
    return (
        <>
            <div className={`filter-container ${isFilterOpen && "filter-visible zindex"} `}>
                <div className="filter-close-button-container">
                    <div className="filter-close-button">
                        <div className="close-icon inline-block align-top" onClick={() => setIsFilterOpen(prev => !prev)}>
                            <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg" width="24" height="24" loading="lazy" alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="filter-content">
                    <div className="fitler-model-sections">
                        <h2 className="filter-model-header m-0 text-[#010205] text-start ">Models</h2>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">All
                                    <span className="model-name-filter text-[#6b6d70]"> (88)</span>
                                </div>
                                <input type="radio" value="All" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} checked={radio === "All"}/>
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">718
                                    <span className="model-name-filter text-[#6b6d70]"> (10)</span>
                                </div>
                                <input type="radio" value="718" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">911
                                    <span className="model-name-filter text-[#6b6d70]"> (23)</span>
                                </div>
                                <input type="radio" value="911" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">Taycan
                                    <span className="model-name-filter text-[#6b6d70]"> (22)</span>
                                </div>
                                <input type="radio" value="Taycan" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">Panamera
                                    <span className="model-name-filter text-[#6b6d70]"> (9)</span>
                                </div>
                                <input type="radio" value="Panamera" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">Macan
                                    <span className="model-name-filter text-[#6b6d70]"> (4)</span>
                                </div>
                                <input type="radio" value="Macan" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                        <div className="radio-container">
                            <div className="radio-container-wrapper">
                                <div className="radio-label">Cayenne
                                    <span className="model-name-filter text-[#6b6d70]"> (20)</span>
                                </div>
                                <input type="radio" value="Cayenne" name='radio' className="radio-input" onChange={(e) => setRadio(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="reset-apply-container">
                        <div className="filter-buttons-container">
                            <div className="reset-button" onClick={() => setRadio("All")}>
                                <span className="label">Reset Filter</span>
                            </div>
                            <div className="apply-button" onClick={() => setIsFilterOpen(false)}>
                                <span className="label">{filterData.find(item => item.title.toString() === radio) ?.models ?? " "} Models Available</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default FilterMenu