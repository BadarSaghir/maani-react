import ResultContainer from "./ResultContainer/ResultContainer"
import SearchBar from "./SearchInput/SearchBar"
import styles from "./SearchBox.module.css"
const SearchPage =()=>{

    return <section className={styles['web-topics-page']}>
   <SearchBar/>
   <ResultContainer/>
</section>
}

export default SearchPage