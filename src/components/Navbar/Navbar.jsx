import { useContext } from "react";
import { IconButton } from "../IconButton/IconButton";
import {ThemeContext} from "../../contexts/themeContext"
import style from "./Navabar.module.css";
import {NavThemeButton} from "../../constant/button"
const Navbar = () => {
    // const {theme,setTheme}= useContext(ThemeContext)

  return (
    <header className={`${style.header}`}>
      <div className={`${style.container} ${style.headerContainer}  `}>
        <div className={`${style.pageModes} `}>
          <div className={`${style.pageTitle} `}>
            <h1 id={`${style.pageTitle} `} tabIndex="0">
              Web Topics
            </h1>
          </div>
          {/**
           * todo:internet
           */}
          <div >
            {NavThemeButton.map((btn)=>{
                return <IconButton key={btn.value} text={btn.label} icon={btn.icon} theme={btn.theme}  onclick={()=>{}} />
     
            })}
          
     
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
