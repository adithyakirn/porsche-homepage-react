import React, { useState } from 'react'
import Header from '../Header/header'
import { useParams } from 'react-router-dom'
import DetailsMain from './Sections/DetailsMain'
import Footer from '../Footer/Footer'

const ModelDetails = () => {
  const { model } = useParams();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    
  return (
    <>
        <Header styl={true} toggleCategory={() => setIsCategoryOpen(prev => !prev)} isCategoryOpen={isCategoryOpen} modl={false}/>
        <DetailsMain />
        <Footer/>
    </>
  )
}

export default ModelDetails