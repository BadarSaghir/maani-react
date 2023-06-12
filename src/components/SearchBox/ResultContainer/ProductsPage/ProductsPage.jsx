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
const ProductsPage = ({ productsData }) => {
  return (
    <>
      {productsData.map((item, id) => (
        <ProductCard href={`/details/${item.id}`}  key={id}  {...item}  />
      ))}
    </>
  );
};

export default ProductsPage;
