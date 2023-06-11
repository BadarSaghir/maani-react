/* eslint-disable react/prop-types */
import FavouriteItem from "./FavouriteItem/FavouriteItem"
import style from "./Favourites.module.css"
const Favourites = ({show=true})=>{
// useEffect(()=>{
// console.log("rerender")
// },[show])
    return    <section className={`${ style["favourites-section"]} } `} id={`${show?"forward":
    "reverse"}`}>
    <div className={`${style["favourites-section-container"]} ${style["container"]}`}>
        <div className={`${style["favourites-items"]}`}>
            <h3>My Favourite Topics</h3>
            <div className={`${style["favourites-items-container"]}`}>
                <FavouriteItem />
                <FavouriteItem  />

            </div>
        </div>
    </div>
</section>
}

export default Favourites