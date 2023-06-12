/* eslint-disable react/prop-types */
// import style from "./ProductPage.module.css"

import ProductCard from "./ProductCard";

/**
 *@typedef {import("./ProductCard.d").IProductCard} IProductCard
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
        <ProductCard key={id}  {...item} />
      ))}
    </>
  );
};

export default ProductsPage;
