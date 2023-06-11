
import { IconButton } from "../IconButton/IconButton";
import style from "./Navabar.module.css";
import {NavThemeButton} from "../../constant/button"
import useThemeChanger from "../../hooks/useThemeChanger";
const Navbar = () => {
    
   const {handleTheme,theme}= useThemeChanger()

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
                return (theme===btn.theme&&<IconButton key={btn.value} text={btn.label} icon={btn.icon} theme={btn.theme}  onclick={handleTheme(btn.value)} />
    )        })}
          
     
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
