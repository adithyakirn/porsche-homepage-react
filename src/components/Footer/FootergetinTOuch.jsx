import React from 'react'
import { NavLink } from 'react-router-dom'

function FootergetinTOuch({text,para,btntext,anchor}) {
    return (
        <>
            <div>
                <div className="individual-getinTouch-section">
                    <h2 className="footer-header">{text}</h2>
                </div>
                <div className="footer-description">
                    <p className="footer-subhead">{para}</p>
                </div>
                <div className="button-container">
                    <NavLink to={anchor || "#"} className="buttn">{btntext}</NavLink>
                </div>
                </div>
        </>
    )
}

export default FootergetinTOuch