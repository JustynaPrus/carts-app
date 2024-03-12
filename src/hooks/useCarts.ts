import { useState, useCallback, useEffect } from "react";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
};

export type CartType = {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type Carts = {
  carts: CartType[];
  total: number;
  skip: number;
  limit: number;
};
const getCarts = async (url: string): Promise<Carts> => {
  const { data } = await axios.get<Carts>(url);
  return data;
};

export const useCarts = (
  url: string
): {
  carts: CartType[];
  isError: boolean;
  isLoading: boolean;
} => {
  const [cartList, setCarts] = useState<Carts>();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const dataHandler = useCallback(async (url: string) => {
    try {
      const carts = await getCarts(url);
      setCarts(carts);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    dataHandler(url);
    setLoading(false);
  }, [dataHandler, url]);

  const carts = cartList?.carts || [];

  return { carts, isLoading, isError };
};
