import React from 'react'
import Socials from './socials'

function Socialmedia() {
  return (
    <>
        <div className="social-nedia-container">
            <div className="social-media-header">
                <h2 className="footer-header">Social Media</h2>
            </div>
            <div className="social-para my-[0.5rem]">
                <p className="footer-subhead">Get in touch with us via social media.</p>
            </div>
            <div className="social-media-images flex flex-wrap gap-[1rem]">
                <Socials facebook={true}/>
                <Socials instagram={true}/>
                <Socials pinterest={true}/>
                <Socials youtube={true}/>
                <Socials x={true}/>
                <Socials linkedin={true}/>
            </div>
        </div>
    </>
  )
}

export default Socialmedia