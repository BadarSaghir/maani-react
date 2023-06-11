import style from "./IconButtton.module.css"
export const IconButton = ()=>{
  return  <button
    type="button"
    // id={`${style["dark-mode-button"]} `} 
    className={`${style["modes-buttons"]} `}
  >
    <ion-icon
      id={`${style["moon"]} `}
      className={`heart ${style["moon"]} ${style["mode-icon"]}`} 
      name="moon-outline"
    ></ion-icon>{" "}
    Dark Mode
  </button> 
}