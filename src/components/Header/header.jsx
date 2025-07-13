import React, { useState, useEffect } from 'react'
import "./header.css"
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { useNavigate } from 'react-router-dom';

function Header({ toggleCategory, isCategoryOpen, styl }) {
  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CategoryMenu isVisible={isCategoryOpen} closeHandler={toggleCategory} />
      <header className="mobile-header" mode="hero">
        <nav className="header">
          <div className={`header-dark-theme ${styl && "block-size"}`}>
            <header className="nav-container">
              <div className="nav-contents">
                <div className="nav-contents-wrapper">
                  <div className="menu-icon">
                    <button onClick={toggleCategory} className="menu-button gap-[4px] flex text-white" id='category'>
                      <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/menu-lines.e332216.svg" width="24" height="24" loading="lazy" alt="" />
                      Menu
                    </button>
                  </div>
                  <div className="porsche-logo-container" onClick={() => navigate('/')}>
                    {window.innerWidth > 750 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg> : <picture>
                      <source srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.0d0cc89@1x.webp 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.2245c45@2x.webp 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.19b4292@3x.webp 3x" type="image/webp"></source>
                      <source srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.d76137c@1x.png 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.18d6f02@3x.png 3x" type="image/png"></source>
                      <img src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png" width="30" height="40" alt="Porsche"></img>
                    </picture>}
                  </div>
                  <div className="profile-icon-container" onClick={toggleCategory}>
                    {windowWidth > 768 && (
                      isCategoryOpen ? (
                        <img
                          src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg"
                          width="24"
                          height="24"
                          loading="lazy"
                          alt="Close"
                        />
                      ) : (
                        <img
                          src="https://cdn.ui.porsche.com/porsche-design-system/icons/user.c18dabe.svg"
                          width="24"
                          height="24"
                          loading="lazy"
                          alt="User"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </header>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
