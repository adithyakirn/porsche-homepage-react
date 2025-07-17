import "./Error.css"
import { useNavigate } from "react-router-dom";
import Svg from "../Header/ProfileIcon/Svg";
import Picture from "../Header/ProfileIcon/Picture";
import { useEffect, useState } from "react";

function Error404() {
  const navigate = useNavigate()
  const [profileIcon, setProfileIcon] = useState()
  useEffect(() => {
    const handleProfileChange = () => {
      window.innerWidth > 766 ? setProfileIcon(<Svg styl={true} />) : setProfileIcon(<Picture styl={true} />)
    }
    handleProfileChange()
    window.addEventListener("resize", handleProfileChange());
    return () => {
      window.removeEventListener("resize", handleProfileChange);
    }
  }, [])
  useEffect(() => {
    const ogTitle = document.title
      document.title = "Page Not Found"
    return() => (
      document.title = ogTitle
    )

  },[])
  return (
    <>
      <div className="porsche-logo-container mt-[20px]" onClick={() => navigate('/')}>{profileIcon}</div>
      <div className="bg-white grid h-[100dvh] place-content-center place-items-center ">
        <div className="w-full h-full flex justify-center flex-col mt-[calc((-3rem-5rem)*2)]">
          <div className="error-header text-[24rem] !font-[reg] ">404</div>
          <p-text class="error-para p-[0_2rem] text-balance m-0" size="x-large" align="center">The page you are trying to access can not be found.</p-text>
        </div>
        <div className="homepage-button mt-[clamp(32px,2.75vw+23px,76px)] text-center">
          <p-link className="cursor-pointer inline-block align-top outline-0 rounded-sm" onClick={() => navigate("/")}>
            <div className="to-homepage flex items-start content-center w-full min-w-min box-border text-start decoration-[none] font-normal text-[1rem/calc(2.125ex+6px] font-[reg] border-[2px] border-[(1,2,5)] rounded-sm p-[13px_26px]">
              To Homepage
            </div>
          </p-link>
        </div>
      </div>
    </>
  );
}

export default Error404;
