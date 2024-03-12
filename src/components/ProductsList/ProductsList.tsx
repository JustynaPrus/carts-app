import React from "react";
import { Product } from "../../types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <Box>
      <h2>Products list</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Line options={options} data={data} />
        </Grid>
        <Grid item xs={6} />
        {products.map((product) => (
          <Grid item xs={2} key={product.id}>
            <Card variant="outlined">
              <CardContent>
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
              </CardContent>
              <CardMedia
                component="img"
                src={product.thumbnail}
                sx={{
                  maxWidth: 200,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
