import Navbar from "./components/Navbar/Navbar";
import style from './App.module.css'
import {themes} from "./constant/theme"
import {bannerConstants} from "./constant/banner"

import { useContext, useEffect } from "react";
import {ThemeContext} from "./contexts/themeContext"
import Banner from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import Favourites from "./components/Favourites/Favourites";
import FavouritiesContext from "./contexts/favouritesContext";
 const App = () => {

 const theme=useContext(ThemeContext)
 const {isOpen,setIsOpen}=useContext(FavouritiesContext)
 const items=[{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 4,
  totalStars :5,
},{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 1,
  totalStars :5,
},
{
  title : "Cloud Computing",
  image : { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating : 2,
  totalStars :5,
}]


  return (
    <div className={themes.dark===theme.theme ?style.darkMode+' '+style.body:style.body} style={{height:"100%", width:'100%'}}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner {...bannerConstants} />
      <Footer/>
      <Favourites show={isOpen} items={items}/>
    </div>
  );
};

export default App