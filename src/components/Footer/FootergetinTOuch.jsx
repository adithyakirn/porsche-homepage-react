import React from 'react'

function FootergetinTOuch({text,para,btntext}) {
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
                    <a href="#" className="buttn">{btntext}</a>
                </div>
                </div>
        </>
    )
}

export default FootergetinTOuch