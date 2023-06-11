/* eslint-disable react/prop-types */
 import style from "./StarBox.module.css";
 export const StartBox = ({children,className=''})=>{
    return   <div className={`${style["star-rating-box"]} ${className}`}>

        {children}
    </div>
}

export default StartBox