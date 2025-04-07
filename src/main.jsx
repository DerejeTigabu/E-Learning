import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import RefactoredApp from '../src/Components/RefactoredApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*<App />*/}
   
   <RefactoredApp />
  </StrictMode>,
)
