import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import "./styles/page.css";
import ModelOverview from "./ModelOverview/ModelOverview";
import Home from "./Home";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrollPosition(currentY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  useEffect(() => {
    if (scrollPosition > 2300) {
      document.body.setAttribute("data-background", "light");
    } else if (scrollPosition > 1500) {
      document.body.setAttribute("data-background", "dark");
    }
    else if (scrollPosition < 2200) {
      document.body.setAttribute("data-background", "light");
    }
  }, [scrollPosition])

  return (
    <>
      <Routes>
        <Route path='/models/:id' element={<ModelOverview />} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App