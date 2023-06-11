import style from "./IconButtton.module.css"
import PropTypes from "prop-types"


/**
 * Renders a button component with an icon and an onClick event.
 *
 * @param {()=>void} onclick - The function to be called when the button is clicked.
 * @param {string} text - The text to be displayed inside the button.
 * @return {JSX.Element} - A button component with the given text and onClick event.
 */
export const IconButton = ({onclick,text,icon=""})=>{
  return  <button
    type="button"
    onClick={onclick}
    className={`${style.modesButtons} ${style.darkModeButton}`}
  >
    {icon}
   {text}
  </button> 
}

IconButton.propTypes = {
onclick:PropTypes.func.isRequired,
text:PropTypes.node.isRequired,
icon:PropTypes.oneOfType([PropTypes.string,PropTypes.node])
};

export default IconButton