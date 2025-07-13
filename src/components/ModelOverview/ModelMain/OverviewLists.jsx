import React from 'react'

function OverviewLists({head,subHead}) {
    return (
        <li className='accelaration-list'>
            <div className="accelaration-heading-container text-[#010205] font-normal text-start ">{head}</div>
            <div className="accelaration-subhead-container text-[#535457] text-start">{subHead}</div>
        </li>
    )
}

export default OverviewLists