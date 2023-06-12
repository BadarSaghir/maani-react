/* eslint-disable react/prop-types */
// import style from "./ProductPage.module.css"

import ProductCard from "./ProductCard";
import {tapWebApiEndPoints} from "../../../../constant/ApiEndPoints"
/**
 *@typedef {import("./IProductCard").IProductCard} IProductCard
 */
/**
 *
 * @param {{productsData?:IProductCard[]}} param0
 * @returns
 */
const ProductsPage = ({ productsData,sortBy="", filterBy="" }) => {
  let data=productsData.filter((data)=>data.category.toLowerCase().includes(filterBy.toLowerCase()))
  if(sortBy)data=data.sort((a,b)=>a[sortBy].localeCompare(b[sortBy]))
  return (
    <>
      {data.map((item, id) => (
        <ProductCard href={`/details/${item.id}`}  key={id}  {...item}  />
      ))}
    </>
  );
};

export default ProductsPage;
