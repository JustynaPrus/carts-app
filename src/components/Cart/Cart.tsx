import React from "react";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { CartType } from "../../hooks/useCarts";
import { ProductsList } from "../ProductsList/ProductsList";

export const Cart: React.FC<{
  cart: CartType;
}> = ({ cart }) => {
  return (
    <li key={cart.id}>
      <h2>Cart</h2>
      <DisplayDetails text="Id:" value={cart.id} />
      <DisplayDetails text="Total:" value={cart.total} />
      <DisplayDetails text="Discounted total:" value={cart.discountedTotal} />
      <DisplayDetails text="Total products:" value={cart.totalProducts} />
      <DisplayDetails text="Total quantity:" value={cart.totalQuantity} />
      <ProductsList products={cart.products} />
    </li>
  );
};
