import React from 'react'
import "./Footer.css"

function FooterLinks({text}) {
    return (
        <>
            <span className="link inline-block w-auto align-top ">
                <span className="link-text">
                    {text}
                </span>
            </span>
        </>
    )
}

export default FooterLinks