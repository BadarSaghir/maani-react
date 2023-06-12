const SearchBar =()=>{

    return (<section id="search-bar-section" className="search-section">
        <div className="container search-custom-container">
            <div className="search-bar">
                <span id="search-icon"><ion-icon class="search-icon" name="search-outline"></ion-icon></span>
                <input className="search-field" type="search" id="SearchField" placeholder="Search the website..." />
                <div className="search-sort-option search-options">
                    <label id="search-sort-label" htmlFor="search-sort-select">Sort by:</label>
                    <select id="search-sort-select" name="sort">
                        <option value="Default">Default</option>
                        <option value="Default">Topic Title</option>
                        <option value="Default">Author Name</option>
                    </select>
                </div>
                <div className="search-filter-option search-options d-flex flex-wrap border-start">
                    <label id="search-filter-label" htmlFor="search-filter-select" className="w-100">Filter by:</label>
                    <select id="search-filter-select" name="filter" className="w-100 border-0">
                        <option value="Default">Default</option>
                    </select>
                </div>
            </div>
        </div>
    </section>)
    

}

export default SearchBar