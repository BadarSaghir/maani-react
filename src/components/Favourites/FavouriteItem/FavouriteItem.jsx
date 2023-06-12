/* eslint-disable react/prop-types */
import RatingStar from "../../Rating/RatingStar";
import style from "./favouriteItem.module.css";
// eslint-disable-next-line react/prop-types
import StarBox from "../../Rating/StarBox";
export const FavouriteItem = ({
  title = "Cloud Computing",
  image = { url: "/images/topics-thumbnails/cloud.jpeg", alt: "react course" },
  startRating = 4,
  totalStars = 5,
}) => {
  return (
    <div className={`${style["favourites-item"]}`}>
      <div className={`${style["favourite-card-thumbnail"]}`}>
        <img src={image.url} alt={image.alt} />
      </div>
      <div className={`${style["favourite-card-details-container"]}`}>
        <h5>{title}</h5>
        <StarBox >
          {Array.from(Array(totalStars), (_, i) => {
            // console.log('index',i,i<startRating);
            //1>2>3>4>5
            return (
              <RatingStar key={i} isNotRatted={i < startRating?false:true} />
            );
          })}
        </StarBox>
      </div>
    </div>
  );
};

export default FavouriteItem;
