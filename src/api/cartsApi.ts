import axios from "axios";
import { Carts, CartType } from "../types";

const getAllCardsPath = "https://dummyjson.com/carts";
const deleteCardPath = (id: number) => `https://dummyjson.com/carts/${id}`;
const addCardPath = "https://dummyjson.com/carts/add";

export const getCarts = async (): Promise<Carts> => {
  const { data } = await axios.get<Carts>(getAllCardsPath);
  return data;
};

export const deleteCart = async (id: number): Promise<CartType> => {
  const { data } = await axios.delete<CartType>(deleteCardPath(id));
  return data;
};

export const addCart = async (cart: CartType): Promise<CartType> => {
  const { data } = await axios.post<CartType>(addCardPath, cart);
  return data;
};
