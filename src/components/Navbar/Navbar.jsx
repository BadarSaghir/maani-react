import { IconButton } from "../IconButton/IconButton";
import style from "./Navabar.module.css";
const Navbar = () => {
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
            <IconButton/>
            <IconButton />
            {/* <button
              type="button"
              id={`${style["dark-mode-button"]} `} 
              className={`${style["modes-buttons"]} `}
            >
              <ion-icon
                id={`${style["moon"]} `}
                className={`heart ${style["moon"]} ${style["mode-icon"]}`} 
                name="moon-outline"
              ></ion-icon>{" "}
              Dark Mode
            </button> */}
            {/* <button
              type="button"
              id="header-heart-button"
              className={`${style["modes-buttons"]} `}
            >
              <ion-icon
                id="heart"
                className={`${style["modes-icon"]} `}
                name="heart-outline"
              ></ion-icon>{" "}
              Favourites
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
