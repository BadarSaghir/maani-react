/* eslint-disable react/prop-types */
import StarBox from "../../../Rating/StarBox";
import RatingStar from "../../../Rating/RatingStar";
import {Link} from "react-router-dom"

const ProductCard = ({startRating=3,totalStars=5,title="Web Development Languages",subTitle="HTML",src="/images/topics-thumbnails/html.png",alt="Web Development Languages"}) => {
    return(<Link to="#" className="web-topic-card">   
     <div className="card-thumbnail">
    <img className="main-page-card-thumbnail-img" src={src} alt={alt} />
</div>
    <div className="card-custom-container">
        <div className="card-details">
            <h4>{title}</h4>
            <h5>{subTitle}</h5>
            <StarBox >
            {Array.from(Array(totalStars), (_, i) => {
        
            return (
              <RatingStar key={i} isNotRatted={i < startRating?false:true} />
            );
          })}
            </StarBox>
            <p>Author: Sarah Smith</p>
        </div>
    </div>
    </Link>
    )
}

export default ProductCard