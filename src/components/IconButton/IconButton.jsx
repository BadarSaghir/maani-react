import style from "./IconButtton.module.css"

export const IconButton = ()=>{
  return  <button
    type="button"
    
    className={`${style.modesButtons} ${style.darkModeButton}`}
  >
    
    Dark Mode
  </button> 
}