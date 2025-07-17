import React, { useEffect, useState } from 'react'
import "./Footer.css"
import { ErrorActionFlags } from 'hls.js'
import { NavLink } from 'react-router-dom'
function Socials({facebook,instagram,pinterest,youtube,x,linkedin}) {
    const[img,setImg] = useState()
    const[functions,setFunctions] = useState()
    useEffect(()=>{
        if(facebook){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-facebook.74abe88.svg")
        }
        else if(instagram){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-instagram.b916daa.svg")
            setFunctions("https://www.instagram.com/adtyakirn/")
        }
        else if(pinterest){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-pinterest.e8f6963.svg")
        }
        else if(youtube){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-youtube.da3798f.svg")
        }   
        else if(x){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-twitter.5f2490a.svg")
        }
        else if(linkedin){
            setImg("https://cdn.ui.porsche.com/porsche-design-system/icons/logo-linkedin.b72559f.svg")
            setFunctions("https://www.linkedin.com/in/adithya-kiran-c-b-6a4738355/")
        }
    },[facebook,instagram,pinterest,youtube,x,linkedin])
  return (
    <>
        <div className="socials inline-block align-top rounded-[4px] relative">
            <span className="footerImage-container p-[13px]">
                <span className="icon">
            <NavLink to={functions || "#"} className=' w-full h-full cursor-pointer'>
                    <img src={img} width="24" height="24" loading="lazy" alt=""></img>
            </NavLink>
                </span>
            </span>
        </div>
    </>
  )
}

export default Socials