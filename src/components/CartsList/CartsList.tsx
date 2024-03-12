import React from "react";
import { useCarts } from "../../hooks/useCarts";
import { Cart } from "../Cart/Cart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

export const CartsList: React.FC = () => {
  const { carts, deleteData, isLoading, isError } = useCarts();

  return (
    <Box component="section" sx={{ p: 2 }}>
      <h1>Carts List</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <List>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id} deleteCart={deleteData} />
          ))}
        </List>
      )}
      {isError && <p>Cannot display carts.</p>}
    </Box>
  );
};
