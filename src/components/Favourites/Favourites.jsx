import FavouriteItem from "./FavouriteItem/FavouriteItem"

export const Favourites =()=>{

    return    <section className="favourites-section" id="favourites-section">
    <div className="container favourites-section-container">
        <div className="favourites-items">
            <h3>My Favourite Topics</h3>
            <div className="favourites-items-container">
                <FavouriteItem />
                <FavouriteItem />

            </div>
        </div>
    </div>
</section>
}

export default Favourites