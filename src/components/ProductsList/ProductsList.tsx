import React from "react";
import { Product } from "../../hooks/useCarts";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";

export const ProductsList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  return (
    <List>
      <h2>Products list</h2>
      {products.map((product) => (
        <ListItemText key={product.id}>
          <DisplayDetails text="Product:" value={product.title} />
          <DisplayDetails text="Price:" value={product.price} />
          <DisplayDetails text="Total:" value={product.total} />
          <DisplayDetails
            text="Discount percentage:"
            value={product.discountPercentage}
          />
          <DisplayDetails
            text="Discounted price:"
            value={product.discountedPrice}
          />
          <CardMedia component="img" src={product.thumbnail} />
        </ListItemText>
      ))}
    </List>
  );
};
