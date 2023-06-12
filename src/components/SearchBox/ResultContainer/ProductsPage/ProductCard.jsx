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
const ProductCard = ({id=0,category='Web Development Languages',totalStars=5,image="",topic="HTML",name="Sarah Smith",rating=3,baseDir="/images/topics-thumbnails/",href="#" }) => {
    return(<Link key={id} to={href} className={`${style["web-topic-card"]}`}>   
     <div className={`${style["card-thumbnail"]}`}>
    <img className={`${style["main-page-card-thumbnail-img"]}`} src={baseDir+image} alt={category} />
</div>
    <div className={`${style["card-custom-container"]}`}>
        <div className={`${style["card-details"]}`}>
            <h4>{topic}</h4>
            <h5>{category}</h5>
            <StarBox >
            {Array.from(Array(totalStars), (_, i) => {
        
            return (
              <RatingStar key={i} isNotRatted={i < rating?false:true} />
            );
          })}
            </StarBox>
            <p>Author: {name}</p>
        </div>
    </div>
    </Link>
    )
}

export default ProductCard