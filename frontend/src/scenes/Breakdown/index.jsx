import React from "react";
// import Header from "Components/Header";
// import BreakdownChart from "Components/BreakdownChart";
import { Box } from "@mui/material";
import Header from "Components/Header";
import { BreakdownChart } from "Components/BreakdownChart";

export const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};
