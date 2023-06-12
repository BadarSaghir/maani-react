// import style from "./ProductPage.module.css"
import {Link} from "react-router-dom"
import StarBox from "../../../Rating/StarBox"
import RatingStar from "../../../Rating/RatingStar"
const ProductsPage = () => {
    return <Link to="#" class="web-topic-card" tabIndex="0">
    <div className="card-thumbnail">
        <img className="main-page-card-thumbnail-img" src="/images/topics-thumbnails/html.png" alt="Web Development Languages" />
    </div>
    <div className="card-custom-container">
        <div className="card-details">
            <h4>Web Development Languages</h4>
            <h5>HTML</h5>
            <StarBox className="">
            {Array.from(Array(5), (_, i) => {
            // console.log('index',i,i<startRating);
            //1>2>3>4>5
            return (
              <RatingStar key={i} isNotRatted={i < 3?false:true} />
            );
          })}
            </StarBox>
            <p>Author: Sarah Smith</p>
        </div>
    </div>
</Link>
}

export default ProductsPage