/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { tapWebApiListParam, tapWebApiListPharaseParam } from "../../../constant/ApiEndPoints";

const SearchBar = ({data,refetch,setSearch,setSortBy,
    setFilterBy}) => {
const [categories,setCategories]=useState([])


useEffect(()=>{
    if(data){
        const category = [...new Set(data.map((item) => item.category))];
        console.log("pageData", data);
        
        setCategories(category)
    }
},[data])

/**
 *@typedef {import("react").ChangeEvent<HTMLInputElement>} Event
 * @param {Event} e 
 */
async function handleSearch(e){
    const text=e.target.value
    if(text)
   setSearch(tapWebApiListPharaseParam(text))
   else
   setSearch(tapWebApiListParam())
  await  refetch()
    console.log(text)
}
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
            name="search"
            onChange={(e)=>{handleSearch(e)}}
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
              onChange={(e)=>setSortBy(e.target.value)}

            >
              <option value="">Default</option>
              <option value="topic">Topic Title</option>
              <option value="name">Author Name</option>
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
              onChange={(e)=>setFilterBy(e.target.value)}
              className={`"w-100 border-0"`}
            >
              <option value="">Default</option>
            
            {categories.map((value,idx)=><option  key={idx} value={value}>{value}</option>)}  
            
            </select>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
