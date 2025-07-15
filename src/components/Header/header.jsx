
import "./header.css"
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Svg from "./ProfileIcon/Svg";
import Picture from "./ProfileIcon/Picture";
function Header({ toggleCategory, isCategoryOpen, styl, modl}) {
  const navigate = useNavigate()

  const [profileIcon, setProfileIcon] = useState()
  useEffect(() => {
    const handleProfileChange = () => {
      window.innerWidth > 766 ? setProfileIcon(<Svg styl={styl} />) : setProfileIcon(<Picture styl={styl} />)
    }
    handleProfileChange()
    window.addEventListener("resize", handleProfileChange());
    return () => {
    window.removeEventListener("resize", handleProfileChange);}
  },[styl])
  return (
    <>
      <CategoryMenu isVisible={isCategoryOpen} closeHandler={toggleCategory} />
      <header className={`mobile-header ${modl &&"!absolute"}`} mode="hero">
        <nav className="header">
          <div className={`header-dark-theme ${styl ? "block-size" : "header-backgroud"}`}>
            <header className="nav-container">
              <div className="nav-contents">
                <div className="nav-contents-wrapper">
                  <div className="menu-icon">
                    <button className={`${!styl && "!filter-[invert(1)]"} menu-button gap-[4px] flex !text-black`} onClick={toggleCategory} id='category'>
                      <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/menu-lines.e332216.svg" width="24" height="24" loading="lazy" alt="" />
                      {window.innerWidth > 500 && "Menu"}
                    </button>
                  </div>
                  <div className="porsche-logo-container" onClick={() => navigate('/')}>{profileIcon}</div>
                  <div onClick={toggleCategory} className={`${!styl && "!filter-[invert(1)]"} profile-icon-container`}>
                    {isCategoryOpen ? ( 
                      <img className={`${window.innerWidth > 760 ? "block" : "hidden"}`}src="https://cdn.ui.porsche.com/porsche-design-system/icons/close.eec3c5d.svg"width="24"height="24"style={{ filter: 'invert()' }}alt="Close"/>
                    ) : (
                      <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/user.c18dabe.svg"width="24"height="24"alt="User"/>
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
