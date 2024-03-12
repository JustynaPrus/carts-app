import React from "react";
import { useCarts } from "../../hooks/useCarts";
import { Cart } from "../Cart/Cart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const url = "https://dummyjson.com/carts";

export const CartsList: React.FC = () => {
  const { carts, isLoading, isError } = useCarts(url);

  return (
    <Box component="section" sx={{ p: 2 }}>
      <h1>Carts List</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Grid container spacing={8}>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id} />
          ))}
        </Grid>
      )}
      {isError && <p>Cannot display carts.</p>}
    </Box>
  );
};
