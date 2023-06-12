/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ResultContainer from "./ResultContainer/ResultContainer"
import SearchBar from "./SearchInput/SearchBar"
import styles from "./SearchBox.module.css"

/**
 *@typedef {import("./ResultContainer/ProductsPage/IProductCard").IProductCard[]} IProductCard
 * @param {{data:IProductCard,setData:(IProductCard)=>IProductCard}} param0 
 * @returns 
 */
const SearchPage =({data,setData})=>{

    return <section className={styles['web-topics-page']}>
   <SearchBar/>
   <ResultContainer data={data}/>
</section>
}

export default SearchPage