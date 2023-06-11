import Navbar from "./components/Navbar/Navbar";
import style from './App.module.css'
import {themes} from "./constant/theme"
import { useContext, useEffect } from "react";
import {ThemeContext} from "./contexts/themeContext"
 const App = () => {
//  const theme="" 
 const theme=useContext(ThemeContext)
// console.log(theme)'
useEffect(()=>{
  console.log(theme)

},[theme])

  return (
    <div className={themes.dark==theme.theme ?style.darkMode:''}>
      <Navbar />
    </div>
  );
};

export default App