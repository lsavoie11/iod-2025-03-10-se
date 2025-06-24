import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 10 }}>
          <Button color="inherit" component={RouterLink} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/login"
            sx={{ mx: 1 }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/bitcoin"
            sx={{ mx: 1 }}
          >
            Bitcoin Rates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
