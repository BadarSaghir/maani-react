/* eslint-disable react/prop-types */
import {useParams} from "react-router-dom";
import {useSearchTopics} from "../hooks/useSearchTopics"
import {tapWebApiGetDetailByIdParam} from "../constant/ApiEndPoints"

const  Details=()=>{
    const {id} = useParams();
    const {data,isLoading}=useSearchTopics(tapWebApiGetDetailByIdParam(id))
    if(isLoading) return <div>Loading..</div>
    return (
        <main >    
            {JSON.stringify(data)}
        </main>
    )
}

export default Details
