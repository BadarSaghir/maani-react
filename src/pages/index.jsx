import { useEffect } from "react";
import SearchPage from "../components/SearchBox/SearchBox";
import {
    useQuery,
  } from '@tanstack/react-query'
const Home = () => {
  
    const { isLoading, error, data } = useQuery({
        queryKey: ['fetchTopics'],
        queryFn:fetchTopics 
      })
      
    useEffect(() => {
        
    })
    if(isLoading) return <div>Loading...</div>
  return (
    <main>
      <SearchPage data={data}/>
    </main>
  );
};


async function fetchTopics(){
 
   return fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json())
}

export default Home;
