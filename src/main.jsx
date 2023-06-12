import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './contexts/themeContext'
import { FavouritiesContextProvider } from './contexts/favouritesContext.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <ThemeContextProvider>
    <FavouritiesContextProvider>
    <App />
    </FavouritiesContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>


  </React.StrictMode>,
)
