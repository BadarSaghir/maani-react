/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ResultContainer from "./ResultContainer/ResultContainer"
import SearchBar from "./SearchInput/SearchBar"
import styles from "./SearchBox.module.css"

/**
 *@typedef {import("./ResultContainer/ProductsPage/IProductCard").IProductCard} IProductCard
 * @param {{data:IProductCard[],isLoading:boolean}} param0 
 * @returns 
 */
import { useState } from "react"
const SearchPage =({data,isLoading=false})=>{
    const [pageData,setPageDataData] = useState({data:data,isLoading:isLoading})

    if(isLoading) return <div>Loading...</div>

    return <section className={styles['web-topics-page']}>
   <SearchBar/>
   <ResultContainer data={pageData.data}/>
</section>
}

export default SearchPage