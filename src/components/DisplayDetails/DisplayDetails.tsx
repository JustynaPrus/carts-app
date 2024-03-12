import React from "react";
import Stack from "@mui/material/Stack";

export const DisplayDetails: React.FC<{
  text: string;
  value: string | number;
}> = ({ text, value }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <p>{text}</p>
      <p>{value}</p>
    </Stack>
  );
};
