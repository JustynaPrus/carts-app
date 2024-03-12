import React, { useState } from "react";
import { useCarts } from "../../hooks/useCarts";
import { Cart } from "../Cart/Cart";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

const url = "https://dummyjson.com/carts";

export const CartsList: React.FC = () => {
  const { carts, isLoading, isError } = useCarts(url);
  const [editedCartsList, setEditedCartsList]  = useState(carts);

  return (
    <Box component="section" sx={{ p: 2 }}>
      <h1>Carts List</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <List>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id} />
          ))}
        </List>
      )}
      {isError && <p>Cannot display carts.</p>}
    </Box>
  );
};
