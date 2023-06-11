/* eslint-disable react/prop-types */
import FavouriteItem from "./FavouriteItem/FavouriteItem"
import style from "./Favourites.module.css"
export const Favourites =({show=true})=>{

    return    <section className={`${style["favourites-section"]}  ${show?".favourites-animation-forward":".favourites-animation-reverse"}} `} id="favourites-section">
    <div className={`${style["favourites-section-container"]} ${style["container"]}`}>
        <div className={`${style["favourites-items"]}`}>
            <h3>My Favourite Topics</h3>
            <div className={`${style["favourites-items-container"]}`}>
                <FavouriteItem />
                <FavouriteItem />

            </div>
        </div>
    </div>
</section>
}

export default Favourites