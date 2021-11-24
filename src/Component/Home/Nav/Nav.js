import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

import logo from "../../../images/logo.png";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: 0 }}
        className="navBar"
      >
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" className="nav">
                <NavLink to="/home"> Home</NavLink>
                <NavLink to="/foods"> Foods</NavLink>
                <NavLink to="/foods"> Book Table</NavLink>
                <NavLink to="/contact"> Contact</NavLink>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 2 }} margin="auto">
              <Typography variant="h6" component="div" sx={{ p: 1 }}>
                <img src={logo} width="100px" alt="" />
              </Typography>
            </Box>
            <Button variant="outlined">Login</Button>
            <Button sx={{ color: "black" }}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </Box> */}
    </div>
  );
};

export default Nav;
