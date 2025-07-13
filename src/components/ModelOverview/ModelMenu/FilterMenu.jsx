import React from 'react'

function FilterMenu({setIsFilterOpen, isFilterOpen}) {
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
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">718  
                            <span className="model-name-filter text-[#6b6d70]"> (10)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">911  
                            <span className="model-name-filter text-[#6b6d70]"> (23)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">Taycan  
                            <span className="model-name-filter text-[#6b6d70]"> (22)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">Panamera  
                            <span className="model-name-filter text-[#6b6d70]"> (9)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">Macan  
                            <span className="model-name-filter text-[#6b6d70]"> (4)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
                <div className="radio-container">
                    <div className="radio-container-wrapper">
                        <div className="radio-label">Cayenne  
                            <span className="model-name-filter text-[#6b6d70]"> (20)</span>
                        </div>
                        <input type="radio" value="radio" name='radio' className="radio-input" />
                    </div>
                </div>
            </div>
            <div className="reset-apply-container">
                <div className="filter-buttons-container">
                    <div className="reset-button">
                        <span className="label">Reset Filter</span>
                    </div>
                    <div className="apply-button">
                        <span className="label">88 Models available</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default FilterMenu