import React, { useState } from 'react'
import Header from "./Header/header";
import Hero from "./Hero section/Hero";
import Cards from "./FeatureCardsSection/Cards";
import StartYourJourney from "./Start Journey/StartYourJourney";
import FindYourPorsche from "./Pre-owned/FindYourPorsche";
import Discover from "./Discover/Discover"
import Footer from "./Footer/Footer";

function Home() {
      const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    return (
        <>
            <Header styl={false} toggleCategory={() => setIsCategoryOpen(prev => !prev)} isCategoryOpen={isCategoryOpen} modl={true}/>
            <Hero isCategoryOpen={isCategoryOpen} setIsCategoryOpen={setIsCategoryOpen} />
            <Cards />
            <StartYourJourney />
            <FindYourPorsche />
            <Discover />
            <Footer />
        </>
    )
}

export default Home