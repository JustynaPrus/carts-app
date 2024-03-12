import React from "react";
import { useCarts } from "../../hooks/useCarts";
import CircularProgress from "@mui/material/CircularProgress";
import { Cart } from "../Cart/Cart";

const url = "https://dummyjson.com/carts";

export const CartsList: React.FC = () => {
  const { carts, isLoading, isError } = useCarts(url);

  return (
    <React.Fragment>
      <h1>Carts List</h1>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <ul>
          {carts.map((cart) => (
            <Cart cart={cart} />
          ))}
        </ul>
      )}
      {isError && <p>Cannot display carts.</p>}
    </React.Fragment>
  );
};
