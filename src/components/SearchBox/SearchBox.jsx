/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ResultContainer from "./ResultContainer/ResultContainer";
import SearchBar from "./SearchInput/SearchBar";
import styles from "./SearchBox.module.css";
import { useEffect, useState } from "react";
import useSearchTopics from "../../hooks/useSearchTopics";
import { tapWebApiListParam } from "../../constant/ApiEndPoints";
/**
 * @typedef {import("./ResultContainer/ProductsPage/IProductCard.d").IProductCard} IProductCard
 */
/**
 *@typedef {import("../../hooks/refetch").IRefetch} IRefetch
 * @param {{data:IProductCard[],isLoading:boolean,refetch:IRefetch}}
 * @returns
 */
const SearchPage = () => {
  const { data, refetch, isFetchedAfterMount,setSearch, isLoading,isInitialLoading } = useSearchTopics(tapWebApiListParam());

  const [sortBy,setSortBy]= useState("")
  const [filterBy,setFilterBy]= useState("")
  return (
    <section className={styles["web-topics-page"]}>
      <SearchBar
      setSortBy={setSortBy}
      setFilterBy={setFilterBy}
      data={data}
        refetch={refetch}
        setSearch={setSearch}
      />

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ResultContainer data={data} sortBy={sortBy} filterBy={filterBy} />
      )}
    </section>
  );
};

export default SearchPage;
