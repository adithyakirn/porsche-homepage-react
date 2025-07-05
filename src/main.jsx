import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/main.css'
import Page from './components/Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
