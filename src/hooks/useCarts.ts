import { useState, useCallback, useEffect } from "react";
import { Carts, CartType } from "../types";
import { getCarts, deleteCart, addCart } from "../api/cartsApi";

export const useCarts = (): {
  carts: CartType[];
  isError: boolean;
  isLoading: boolean;
  deleteData: (id: number) => void;
  addData: (cart: CartType) => void;
} => {
  const [cartList, setCarts] = useState<Carts>();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const dataHandler = useCallback(async () => {
    try {
      const carts = await getCarts();
      setCarts(carts);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dataHandler();
    setLoading(false);
  }, [dataHandler]);

  const deleteData = useCallback(async (id: number) => {
    try {
      const cart = deleteCart(id);
      console.log(cart);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addData = useCallback(async (cart: CartType) => {
    try {
      const createdCart = addCart(cart);
      console.log(createdCart);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const carts = cartList?.carts || [];

  return { carts, isLoading, isError, deleteData, addData };
};
