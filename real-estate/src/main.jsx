//  
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from'react-router-dom'
import HomeContextProvider from './Context/HomeContext.jsx'

createRoot(document.getElementById('root')).render(
  <HomeContextProvider>
    <Router > 
      <App />
    </Router>
  </HomeContextProvider>
  
)
