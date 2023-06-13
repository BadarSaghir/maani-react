import Navbar from "./components/Navbar/Navbar";
import style from  './App.module.css'
import {themes} from "./constant/theme"
import {bannerConstants} from "./constant/banner"
import {Routes,Route} from "react-router-dom"
import { useContext, useEffect } from "react";
import {ThemeContext} from "./contexts/themeContext"
import Banner from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import Favourites from "./components/Favourites/Favourites";
import FavouritiesContext from "./contexts/favouritesContext";
import Home from "./pages";
import Details from "./pages/details";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { FAVOURITE_KEY,} from "./constant/favourties";
// import {CSSTransition,TransitionGroup} from "react-transition-group"

import { useState } from "react";
 const App = () => {
  const queryClient = new QueryClient()
  
// style.flexBox
 const theme=useContext(ThemeContext)
 const {isOpen,setIsOpen,favourities}=useContext(FavouritiesContext)
const [items,setItems]=useState([])
useEffect(()=>{
  const _items= localStorage.getItem(FAVOURITE_KEY)
  if(_items){
    setItems(JSON.parse(_items))
  }
},[isOpen,favourities])

  return (
    <QueryClientProvider client={queryClient}>

    <div className={`${style.flexBox} ${themes.dark===theme.theme ?style.darkMode+' '+style.body:style.body}`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner {...bannerConstants} />
      <div className={style.container}>
      <Routes>
  
     
        
          <Route path="/" element={  <Home />} />
        
          
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<div>Not Found</div>} />

    
  </Routes>
    </div>
      <Footer/>
      <Favourites show={isOpen} items={items}/>
    </div>

    </QueryClientProvider>

  );
};

export default App