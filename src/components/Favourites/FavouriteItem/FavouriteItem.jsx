import style from './favouriteItem.module.css'
// eslint-disable-next-line react/prop-types
 export const FavouriteItem = ({title='Cloud Computing',image={url:'/images/topics-thumbnails/cloud.jpeg',alt:'react course'}})=>{
    return   <div className={`${style["favourites-item"]}`}>
    <div className={`${style["favourite-card-thumbnail"]}`}>
        <img src={image.url} alt={image.alt} />
    </div>
    <div className={`${style["favourite-card-details-container"]}`}>
        <h5>{title}</h5>
        <div className={`${style["star-rating-box"]}`}>
            <div className={`${style["star-border"]}`}>
                <div className={`${style["second-level-star"]}`}>
                </div>
            </div>
            <div className={`${style["star-border"]}`}>
                <div className={`${style["second-level-star"]}`}>
                </div>
            </div>
            <div className={`${style["star-border"]}`}>
                <div className={`${style["second-level-star"]}`}>
                </div>
            </div>
            <div className={`${style["star-border"]}`}>
                <div className={`${style["second-level-star"]}`}>
                </div>
            </div>
            <div className={`${style["star-border"]}`}>
                <div className={`${style["second-level-star"]}`}>
                    <div className={`${style["star-color-fill"]}`}></div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default FavouriteItem