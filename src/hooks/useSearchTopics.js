import {  useState } from "react";
import { tapWebApiEndPoints } from "../constant/ApiEndPoints";
import {
    useQuery,
  } from '@tanstack/react-query'
export const useSearchTopics = (searching="") => {
      const [search,setSearch]=useState(searching)
    const { isLoading, isFetchedAfterMount,error, data,refetch,isRefetching,isRefetchError,isInitialLoading } = useQuery({
        queryKey: ['fetchTopics',search],
        queryFn:({queryKey})=>fetchTopics (queryKey[1]),
      })
      
    
  return {
    isLoading,
    isInitialLoading,
    data,
    error,
    isFetchedAfterMount,
    setSearch,
    refetch,
    isRefetching,
    isRefetchError,
  }
};


async function fetchTopics(search){
 
   const res= await fetch(tapWebApiEndPoints+search)
   return await res.json()
}
export default useSearchTopics
