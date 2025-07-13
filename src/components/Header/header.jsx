import React, { useState, useEffect } from 'react'
import "./header.css"
import CategoryMenu from '../CategoryMenu/CategoryMenu'

function Header({ toggleCategory, isCategoryOpen ,styl}) {
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
        <div className={`header-dark-theme ${styl && "block-size"}` }>
            <header className="nav-container">
                <div className="nav-contents">
                    <div className="nav-contents-wrapper">
                        <div className="menu-icon">
                              <button onClick={toggleCategory} className="menu-button gap-[4px] flex text-white" id='category'>
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/menu-lines.e332216.svg" width="24" height="24" loading="lazy" alt="" />
                                Menu
                              </button>
                        </div>
                        <div className="porsche-logo-container">
                            <picture>
                                <source srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.0d0cc89@1x.webp 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.2245c45@2x.webp 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.19b4292@3x.webp 3x" type="image/webp"></source>
                                <source srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.d76137c@1x.png 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.18d6f02@3x.png 3x" type="image/png"></source>
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png" width="30" height="40" alt="Porsche"></img>
                            </picture>
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
