import style from "./IconButtton.module.css"
import PropTypes from "prop-types"


/**
 * Renders a button component with an icon and an onClick event.
 *
 * @param {()=>void} onclick - The function to be called when the button is clicked.
 * @param {string} text - The text to be displayed inside the button.
 * @return {JSX.Element} - A button component with the given text and onClick event.
 */
export const IconButton = ({onclick,text,icon,className,id,setHover,ignoreCss=false})=>{
  return  <button
    type="button"
    onClick={onclick}
    id={id}
onMouseOver={()=>{if(setHover) setHover(true)}}
onMouseOut={()=>{if(setHover) setHover(false)}}
    className={`${style.modesButtons} ${ignoreCss?'':style.darkModeButton} ${className}}`}
    
  >
    {icon}
   {text}
  </button> 
}

IconButton.propTypes = {
onclick:PropTypes.func.isRequired,
text:PropTypes.node.isRequired,
icon:PropTypes.node,
className:PropTypes.string,
id:PropTypes.string,
setHover:PropTypes.any,
ignoreCss:PropTypes.bool


};

export default IconButton