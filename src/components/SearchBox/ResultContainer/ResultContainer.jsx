/* eslint-disable react/prop-types */
import style from "./ResultContainer.module.css"
import ProductsPage from "./ProductsPage/ProductsPage"
const ResultContainer =({result="0",found="Web Topics Found"})=>{

    return <div className={`${style['container']}  ${style["main-custom-container"]}`}>
        <h3 id="number-of-topics-found">
        &quot;{result}&quot; {found}</h3>
        <div className={`${style["web-topics-box-parent"]}`}>
            <div id="web-topics" className={`${style["web-topics"]}`}> 
            {/* {found} */}
            <ProductsPage/>
            </div>
       </div>
    </div>

}

export default ResultContainer