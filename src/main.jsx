import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './contexts/themeContext'
import { FavouritiesContextProvider } from './contexts/favouritesContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <FavouritiesContextProvider>
    <App />
    </FavouritiesContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
