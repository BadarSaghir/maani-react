/* eslint-disable react/prop-types */
import { IconButton } from "../IconButton/IconButton";

import style from "./Navabar.module.css";
import { navThemeButton, favouriteButton } from "../../constant/button";
import useThemeChanger from "../../hooks/useThemeChanger";
import { HiOutlineMoon } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { themes } from "../../constant/theme";
import { Link } from "react-router-dom";
const Navbar = ({isOpen="",setIsOpen=()=>{}}) => {
  const { handleTheme, theme } = useThemeChanger();
  
  const [isHover, setIsHover] = useState(false);

  return (
    <header className={`${style.header}`}>
      <div className={`${style.container} ${style.headerContainer}  `}>
        <div className={`${style.pageModes} `}>
          <div className={`${style.pageTitle} `}>
            <h1 id={`${style.pageTitle} `} tabIndex="0">
          <Link to={"/"}>
            <a> Web Topics</a>
           </Link>    
            </h1>
          </div>

          <div>
            {navThemeButton.map((btn) => {
              return (
                theme !== btn.theme && (
                  <IconButton
                    key={btn.value}
                    text={btn.label}
                    icon={
                      <span style={{ height: 16, margin: 4 }}>
                        <HiOutlineMoon
                          className={style.modeIcon}
                          height={"100%"}
                          width={"100%"}
                        />
                      </span>
                    }
                    theme={btn.theme}
                    onclick={handleTheme(btn.value)}
                  />
                )
              );
            })}

            <IconButton
              id={themes.light == theme ? style.btn : ""}
              setHover={setIsHover}
              ignoreCss={true}
              text={favouriteButton.label}
              icon={
                <span style={{ height: 16, margin: 4 }}>
                  {isOpen || isHover ? (
                    <AiFillHeart
                      className={`${style.modeIcon} ${style.heartFill} `}
                      height={"100%"}
                      width={"100%"}
                    />
                  ) : (
                    <AiOutlineHeart
                      className={` ${style.heart} ${style.modeIcon} `}
                      height={"100%"}
                      width={"100%"}
                    />
                  )}
                </span>
              }
              onclick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
