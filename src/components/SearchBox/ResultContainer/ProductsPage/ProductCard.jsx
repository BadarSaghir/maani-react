/* eslint-disable react/prop-types */
import StarBox from "../../../Rating/StarBox";
import RatingStar from "../../../Rating/RatingStar";
import {Link} from "react-router-dom"
import style from "./ProductCard.module.css"
/**
 * 
 * @param {import("./ProductCard").IProductCard} param0 
 * @returns 
 */
const ProductCard = ({startRating=3,totalStars=5,title="Web Development Languages",subTitle="HTML",src="/images/topics-thumbnails/html.png",alt="Web Development Languages",href="#",author="Sarah Smith" }) => {
    return(<Link to={href} className={`${style["web-topic-card"]}`}>   
     <div className={`${style["card-thumbnail"]}`}>
    <img className={`${style["main-page-card-thumbnail-img"]}`} src={src} alt={alt} />
</div>
    <div className={`${style["card-custom-container"]}`}>
        <div className={`${style["card-details"]}`}>
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <StarBox >
            {Array.from(Array(totalStars), (_, i) => {
        
            return (
              <RatingStar key={i} isNotRatted={i < startRating?false:true} />
            );
          })}
            </StarBox>
            <p>Author: {author}</p>
        </div>
    </div>
    </Link>
    )
}

export default ProductCard