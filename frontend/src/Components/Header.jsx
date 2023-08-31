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
        {subtitle} {title === "DASHBOARD" && isLoading ? <Timer /> : <></>}
      </Typography>
    </Box>
  );
}

export default Header;
