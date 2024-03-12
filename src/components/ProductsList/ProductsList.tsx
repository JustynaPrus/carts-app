import React from "react";
import { Product } from "../../hooks/useCarts";

export const ProductsList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.total}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.discountedPrice}</p>
          {/* <image src={product.thumbnail}/> */}
        </li>
      ))}
    </ul>
  );
};
