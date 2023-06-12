import ResultContainer from "./ResultContainer/ResultContainer"
import SearchBar from "./SearchInput/SearchBar"
import styles from "./SearchBox.module.css"
const SearchBox =()=>{

    return <section id={styles['web-topics-page']} className={styles['web-topics-page']}>
   <SearchBar/>
   <ResultContainer/>
</section>
}

export default SearchBox