import React from 'react'
import "./header.css"

function Header() {
  return (
    <>
    <header className="mobile-header" mode="hero">
        <nav className="header">
        <div className="header-dark-theme">
            <header className="nav-container">
                <div className="nav-contents">
                    <div className="nav-contents-wrapper">
                        <div className="menu-icon">
                            <button className="menu-button">
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/menu-lines.e332216.svg" width="24" height="24" loading="lazy" alt=""></img>
                            </button>
                        </div>
                        <div className="porsche-logo-container">
                            <picture>
                                <source srcset="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.0d0cc89@1x.webp 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.2245c45@2x.webp 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.19b4292@3x.webp 3x" type="image/webp"></source>
                                <source srcset="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.d76137c@1x.png 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.18d6f02@3x.png 3x" type="image/png"></source>
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png" width="30" height="40" alt="Porsche"></img>
                            </picture>
                        </div>
                        <div className="profile-icon-container">
                            <button className="menu-button">
                                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/user.c18dabe.svg" width="24" height="24" loading="lazy" alt=""></img>
                            </button>
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
