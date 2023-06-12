import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <section
   
      className={`${style["search-section"]}`}
    >
      <div
        className={` ${style["container"]}  ${style["search-custom-container"]}`}
      >
        <div className={`${style["search-bar"]}`}>
          <span >
        {/* TODO:ICON */}
            {/* <ion-icon clas={`${style["search-icon"]}`}> name="search-outline"></ion-icon> */}
          </span>
          <input
            className={`${style["search-field"]}`}
            type="search"
            
            placeholder="Search the website..."
          />
       
          <div
            className={`${style["search-filter-option"]} ${style["search-options"]}  d-flex flex-wrap border-start`}
          >
            <label
              id={`"search-filter-label"`}
              htmlFor="search-filter-select"
              className={`"w-100"`}
            >
              Sort by:
            </label>
            <select
              id={`"search-filter-select"`}
              name="filter"
              className={`"w-100 border-0"`}
            >
              <option value="Default">Default</option>
              <option value="Topic">Topic Title</option>
              <option value="Author">Author Name</option>
            </select>
          </div>
          <div
            className={`${style["search-filter-option"]} ${style["search-options"]}  d-flex flex-wrap border-start`}
          >
            <label
              id={`"search-filter-label"`}
              htmlFor="search-filter-select"
              className={`"w-100"`}
            >
              Filter by:
            </label>
            <select
              id={`"search-filter-select"`}
              name="filter"
              className={`"w-100 border-0"`}
            >
              <option value="Default">Default</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
