import React, { useState } from "react";
import "./styles/page.css";
import "./styles/media.css";
import Header from "./Header/header";
import Hero from "./Hero section/Hero";
import Cards from "./FeatureCardsSection/Cards";

function App() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  return (
    <>
      <Header toggleCategory={()=> setIsCategoryOpen(prev => !prev)}/>
      <Hero isCategoryOpen={isCategoryOpen} setIsCategoryOpen={setIsCategoryOpen}/>
      <Cards/>
    </>
  );
}

export default App;
