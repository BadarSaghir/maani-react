import { useEffect, useState } from "react";
import SearchPage from "../components/SearchBox/SearchBox";
import { tapWebApiEndPoints } from "../constant/ApiEndPoints";
import {
    useQuery,
  } from '@tanstack/react-query'
const Home = () => {
  
    const { isLoading, error, data } = useQuery({
        queryKey: ['fetchTopics'],
        queryFn:fetchTopics 
      })
    
    if(isLoading) return <div>Loading...</div>
  return (
    <main>
        {/* {data[0].id} */}
   {<SearchPage data={data} />}
    </main>
  );
};


async function fetchTopics(){
 
   const res= await fetch(tapWebApiEndPoints)
   return await res.json()
}

export default Home;
