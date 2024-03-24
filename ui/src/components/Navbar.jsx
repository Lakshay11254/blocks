import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Check Blocks info & Send Transactions
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
