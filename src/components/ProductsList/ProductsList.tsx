import React from "react";
import { Product } from "../../hooks/useCarts";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import { DisplayDetails } from "../DisplayDetails/DisplayDetails";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ProductsList: React.FC<{
  products: Product[];
}> = ({ products }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Products Prices Chart",
      },
    },
  };

  const labels = products.map((product) => product.title);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: products.map((product) => product.price),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Discounted price",
        data: products.map((product) => product.discountedPrice),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <List>
      <h2>Products list</h2>
      <Line options={options} data={data} />
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
          <CardMedia
            component="img"
            src={product.thumbnail}
            sx={{
              maxWidth: 200,
            }}
          />
        </ListItemText>
      ))}
    </List>
  );
};
