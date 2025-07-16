import React, { useState } from 'react'
import Header from '../Header/header'
import { useParams } from 'react-router-dom'
import DetailsMain from './Sections/DetailsMain'
import Footer from '../Footer/Footer'
import ModelSwitcher from './Category/ModelSwitcher'

const ModelDetails = () => {
  const { group } = useParams();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <ModelSwitcher setIsFilterOpen={() => setIsFilterOpen(prev => !prev)} isFilterOpen={isFilterOpen} />
      <Header styl={false} toggleCategory={() => setIsCategoryOpen(prev => !prev)} isCategoryOpen={isCategoryOpen} modl={true} />
      <DetailsMain setIsFilterOpen={() => setIsFilterOpen(prev => !prev)} isFilterOpen={isFilterOpen} />
      <Footer />
    </>
  )
}

export default ModelDetails