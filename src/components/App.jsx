import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import "./styles/page.css";
import ModelOverview from "./ModelOverview/ModelOverview";
import Home from "./Home";
import ModelDetails from "./Model Details/ModelDetails";
import Error404 from "./Error/Error404";
import Loader from "./Loading/Loader";
import { LoadingProvider } from "./Loading/LoadingContext";

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
    <LoadingProvider>
      <Loader/>
      <Routes>
        <Route path='/models/:id' element={<ModelOverview />}>
        </Route>
            <Route path='/model/:model' element={<ModelDetails/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
      </LoadingProvider>
    </>
  );
}

export default App