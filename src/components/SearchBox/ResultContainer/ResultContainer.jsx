/* eslint-disable react/prop-types */
import style from "./ResultContainer.module.css"
import ProductsPage from "./ProductsPage/ProductsPage"
/**
 *@typedef {import("./ProductsPage/IProductCard").IProductCard[]} IProductCard
 * @param {{data:IProductCard,found:string}} param0 
 * @returns 
 */
const ResultContainer =({data,found="Web Topics Found",sortBy="", filterBy=""})=>{
    const resultLength=data.filter((data)=>data.category.toLowerCase().includes(filterBy.toLowerCase())).length


    return <div className={`${style['container']}  ${style["main-custom-container"]}`}>
        <h3 id="number-of-topics-found">
        &quot;{resultLength}&quot; {found}</h3>
        <div className={`${style["web-topics-box-parent"]}`}>
            <div id="web-topics" className={`${style["web-topics"]}`}> 
            {/* {found} */}
            <ProductsPage sortBy={sortBy} filterBy={filterBy} productsData={data}/>
            </div>
       </div>
    </div>

}

export default ResultContainer