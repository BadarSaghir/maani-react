/* eslint-disable react/prop-types */
import style from "./CourseDetailBox.module.css";
import { StarBox } from "../Rating/StarBox";
import RatingStar from "../Rating/RatingStar";
import { useState, useEffect,useContext } from "react";
import { FAVOURITE_KEY } from "../../constant/favourties";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import FavouritiesContext from "../../contexts/favouritesContext";

export function CourseDetailBox({ data }) {
    const {setfavourities}=useContext(FavouritiesContext)

  const [items, setItems] = useState([
    {
      id: -1,
      title: "",
      image: { url: "/images/topics-thumbnails/", alt: "" },
      startRating: 0,
      totalStars: 5,
    },
  ]);
  useEffect(() => {
    const _items = localStorage.getItem(FAVOURITE_KEY);
    if (_items) {
      setItems(JSON.parse(_items));
    } else {
      localStorage.setItem(FAVOURITE_KEY, []);
      setItems(JSON.parse([]));
    }
  }, []);

  function handleFavourite() {
    if (items.findIndex((element) => element.id === data.id) == -1) {
        setfavourities(data.topic)

      const oldItems = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
      const newItem = {
        id: data.id,
        title: data.category,
        image: {
          url: `/images/topics-thumbnails/${data.image}`,
          alt: data.topic,
        },
        startRating: data.rating,
        totalStars: 5,
      };
      const pustItems = [...oldItems, newItem];
      localStorage.setItem(FAVOURITE_KEY, JSON.stringify(pustItems));
      setItems(pustItems);
    }else{
      const newItems= items.filter((item)=>item.id!==data.id)
      
      localStorage.setItem(FAVOURITE_KEY, JSON.stringify(newItems));
      setfavourities("")
      setItems(newItems);

    }

    // {? <AiFillHeart/>:<AiOutlineHeart/>}
  }

  return (
    <div id="course-details-box" className={`${style["course-details-box"]}`}>
      <div
        id="course-details-box-container"
        className={`${style["details-page-container"]}`}
      >
        <div className={`${style["course-details"]}`}>
          <h4>{data.category}</h4>
          <h5>{data.topic}</h5>
          {/* <div className={`${style["star-rating-box"]}`}
>
                    <div className={`${style["star-border"]}`}
>
                        <div className={`${style["second-level-star"]}`}
></div>
                    </div>
                    <div className={`${style["star-border"]}`}
>
                        <div className={`${style["second-level-star"]}`}
></div>
                    </div>
                    <div className={`${style["star-border"]}`}
>
                        <div className={`${style["second-level-star"]}`}
></div>
                    </div>
                    <div className={`${style["star-border"]}`}
>
                        <div className={`${style["second-level-star"]}`}
></div>
                    </div>
                    <div className={`${style["star-border"]}`}
>
                        <div className={`${style["second-level-star"]}`}
>
                            <div
                                id="details-page-star-color-fill"
                                className={`${style["star-color-fill"]}`}

                            ></div>
                        </div>
                    </div>
                </div> */}
          <StarBox>
            {Array.from(Array(5), (_, i) => {
              // console.log('index',i,i<startRating);
              //1>2>3>4>5
              return (
                <RatingStar
                  key={i}
                  isNotRatted={i < data.rating ? false : true}
                />
              );
            })}
          </StarBox>

          <p id="course-details-para">{data.description}</p>
        </div>
        <div
          id="details-page-card-contianer"
          className={`${style["details-page-card-contianer"]}`}
        >
          <div
            id="details-page-card"
            className={`${style["details-page-card"]}`}
          >
            <div className={`${style["details-page-card-thumbnail"]}`}>
              <img
                src={`../images/topics-thumbnails/${data.image}`}
                alt="html course"
              />
            </div>
            <div className={`${style["details-page-card-custom-container"]}`}>
              <h4>
                <span>HTML</span> by <a href="/">{data.name}</a>
              </h4>
              <div
                id="add-to-favourites-box"
                className={`${style["add-to-favourites-box"]}`}
              >
                <p>Interested about this topic?</p>
                <button
                  type="button"
                  onClick={handleFavourite}
                  className={`${style["rounded-0"]}`}
                >
                  Add to Favourites{" "}
                  <span className={style["details-page-heart"]}>
                    {items.findIndex((element) => element.id === data.id) !=
                    -1 ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </span>
                  <ion-icon
                    id="details-page-heart"
                    class="details-page-heart"
                    name="heart-outline"
                  ></ion-icon>
                </button>
                <h6>Unlimited Credits</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
