
import Header from '../Header/header'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MainSection from './ModelMain/MainSection'

function ModelOverview() {
  const {id} = useParams()
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  return (
    <>
        <Header styl={true} toggleCategory={() => setIsCategoryOpen(prev => !prev)} isCategoryOpen={isCategoryOpen} />
          <MainSection id={id}/>
        <Footer/>
    </>
  )
}

export default ModelOverview