import React, { useEffect, useState } from "react";
import "./styles/page.css";
import "./styles/media.css";
import Header from "./Header/header";
import Hero from "./Hero section/Hero";
import Cards from "./FeatureCardsSection/Cards";
import StartYourJourney from "./Start Journey/StartYourJourney";
import FindYourPorsche from "./Pre-owned/FindYourPorsche";
import Discover from "./Discover/Discover"
import Footer from "./Footer/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrollPosition(currentY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])
  useEffect(() => {
    if (scrollPosition > 2300) {
      document.body.setAttribute("data-background", "light");
    } else if(scrollPosition > 1500){
      document.body.setAttribute("data-background", "dark");
    }
    else if(scrollPosition < 2200){
      document.body.setAttribute("data-background", "light");
    }
  },[scrollPosition])

  return (
    <>
      <Header toggleCategory={() => setIsCategoryOpen(prev => !prev)} isCategoryOpen={isCategoryOpen} />
      <Hero isCategoryOpen={isCategoryOpen} setIsCategoryOpen={setIsCategoryOpen}/>
      <Cards/>
      <StartYourJourney />
      <FindYourPorsche/>
      <Discover/>
      <Footer/>
    </>
  );
}

export default App