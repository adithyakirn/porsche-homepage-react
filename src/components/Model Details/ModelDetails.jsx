import React from 'react'
import Header from '../Header/header'
import { useParams } from 'react-router-dom'
import DetailsMain from './Sections/DetailsMain'
import Footer from '../Footer/Footer'
import ModelSwitcher from './Category/ModelSwitcher'

const ModelDetails = () => {
  const { group } = useParams();
    
  return (
    <>
      {/* <ModelSwitcher /> */}
      <Header styl={true} toggleCategory={() => {}} isCategoryOpen={false} modl={false}/>
      <DetailsMain />
      <Footer/>
      </>
  )
}

export default ModelDetails