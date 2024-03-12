import React, { useState } from "react";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { CartType } from "../../hooks/useCarts";
import { ProductsList } from "../ProductsList/ProductsList";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export const Cart: React.FC<{
  cart: CartType;
}> = ({ cart }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = () => setShowProducts(!showProducts);

  return (
    <Card>
      <Stack direction="row" alignItems="center" spacing={1}>
        <b>Cart</b>
        <b>{cart.id}</b>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <DisplayDetails text="Total:" value={cart.total} />
        </Grid>

        <Grid item xs={10}>
          <DisplayDetails
            text="Discounted total:"
            value={cart.discountedTotal}
          />
        </Grid>
        <Grid item xs={2}>
          <DisplayDetails text="Total products:" value={cart.totalProducts} />
        </Grid>
        <Grid item xs={10}>
          <DisplayDetails text="Total quantity:" value={cart.totalQuantity} />
        </Grid>
      </Grid>

      <button onClick={handleShowProducts}>
        {showProducts ? <p>Hide products</p> : <p>Show products</p>}
      </button>
      {showProducts && <ProductsList products={cart.products} />}
    </Card>
  );
};
