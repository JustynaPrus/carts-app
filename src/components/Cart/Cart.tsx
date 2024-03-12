import React, { useCallback, useState } from "react";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import { CartType } from "../../types";
import { ProductsList } from "../ProductsList/ProductsList";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export const Cart: React.FC<{
  cart: CartType;
  deleteCart: (id: number) => void;
}> = ({ cart, deleteCart }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = useCallback(
    () => setShowProducts(!showProducts),
    [showProducts]
  );

  return (
    <Card variant="outlined">
      <CardContent>
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
      </CardContent>

      <CardActions>
        <button onClick={() => deleteCart(cart.id)}>Delete cart</button>
        <button onClick={handleShowProducts}>
          {showProducts ? (
            <span>Hide products</span>
          ) : (
            <span>Show products</span>
          )}
        </button>
      </CardActions>

      {showProducts && <ProductsList products={cart.products} />}
    </Card>
  );
};
