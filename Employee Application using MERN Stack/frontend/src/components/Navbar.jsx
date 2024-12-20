import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Link to={"/employeelist"} style={{ color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={"/addemployee"} style={{ color: "white" }}>
            <Button color="inherit">Add Employee</Button>
          </Link>
          <Link to={"/"} style={{ color: "white" }}>
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
