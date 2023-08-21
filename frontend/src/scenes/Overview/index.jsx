import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "Components/Header";
import OverviewChart from "Components/OverviewChart";
import React, { useState } from "react";

function Overview() {
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subtitle="General overview and profits" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
}

export default Overview;
