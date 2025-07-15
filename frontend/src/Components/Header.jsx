import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Timer from "./Timer";

function Header({ title, subtitle, isLoading }) {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle + "I’ve hosted the backend server on Render, so it might take around 25 to 30 seconds to load at first due to cold start. This is a large project with many features built using React and Node.js. I did take help and references from other sources, but I wrote every line of code myself and can clearly explain how everything works."} {title === "DASHBOARD" && isLoading ? <Timer /> : <></>}
      </Typography>
    </Box>
  );
}

export default Header;
