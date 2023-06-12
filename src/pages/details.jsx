/* eslint-disable react/prop-types */
import {useParams} from "react-router-dom";
const  Details=()=>{
    const {id} = useParams();

    return (
        <main >    
            {id}
        </main>
    )
}

export default Details
