import Navbar from "./components/Navbar/Navbar";
import style from './App.module.css'
import {themes} from "./constant/theme"
import {bannerConstants} from "./constant/banner"

import { useContext, useEffect } from "react";
import {ThemeContext} from "./contexts/themeContext"
import Banner from "./components/Banner/Banner";
 const App = () => {
//  const theme="" 
 const theme=useContext(ThemeContext)
// console.log(theme)'
useEffect(()=>{
  console.log(theme)

},[theme])

  return (
    <div className={themes.dark===theme.theme ?style.darkMode:''}>
      <Navbar />
      <Banner {...bannerConstants} />
    </div>
  );
};

export default App