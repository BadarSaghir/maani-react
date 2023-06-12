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
  const data=productsData.sort((data)=>data.name).filter((data)=>data.category.toLowerCase().includes(filterBy.toLowerCase()))
  return (
    <>
      {data.map((item, id) => (
        <ProductCard href={`/details/${item.id}`}  key={id}  {...item}  />
      ))}
    </>
  );
};

export default ProductsPage;
