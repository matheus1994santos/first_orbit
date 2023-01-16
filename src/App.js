import { Box } from "@mui/material";
import React from "react";
import HomePage from "./containers/homepage";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        height: '100vh'
      }}
    >
      <HomePage/>
    </Box>
  );
}

export default App;
