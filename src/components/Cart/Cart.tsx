import React, { useState } from "react";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { CartType } from "../../hooks/useCarts";
import { ProductsList } from "../ProductsList/ProductsList";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export const Cart: React.FC<{
  cart: CartType;
}> = ({ cart }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = () => setShowProducts(!showProducts);

  return (
    <Grid item xs={4}>
      <Card>
        <h2>Cart</h2>
        <DisplayDetails text="Id:" value={cart.id} />
        <DisplayDetails text="Total:" value={cart.total} />
        <DisplayDetails text="Discounted total:" value={cart.discountedTotal} />
        <DisplayDetails text="Total products:" value={cart.totalProducts} />
        <DisplayDetails text="Total quantity:" value={cart.totalQuantity} />
        <button onClick={handleShowProducts}>Show products</button>
        {showProducts && <ProductsList products={cart.products} />}
      </Card>
    </Grid>
  );
};
