import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  styled,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Box } from "@mui/system";
import React from "react";
import UseFirebase from "../../Component/Hooks/UseFirebase";
import "./Nav.css";

import logo from "../../images/logo.png";

import { HashLink as Link } from "react-router-hash-link";
import Responsive from "./Responsive";
import DropDown from "../Dropdown/DropDown";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user } = UseFirebase();
  console.log(user);
  return (
    <div>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: 0 }}
        className="navBar"
      >
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              {isMobile ? (
                <Responsive user={user}></Responsive>
              ) : (
                <Typography variant="h6" component="div" className="nav">
                  <Link smooth to="/home">
                    Home
                  </Link>
                  <Link smooth to="/home#foods">
                    Foods
                  </Link>
                  <Link smooth to="/home#booking">
                    Book Table
                  </Link>
                  <Link smooth to="/home#contact">
                    Contact
                  </Link>
                </Typography>
              )}
            </Box>

            <Box sx={{ flexGrow: 2 }} margin="auto">
              <Typography variant="h6" component="div" sx={{ p: 1 }}>
                <Link to="/home">
                  <img src={logo} width="100px" alt="" />
                </Link>
              </Typography>
            </Box>
            {user.email ? (
              <>
                <DropDown />
              </>
            ) : (
              <Link to="/login">
                <Button variant="outlined">Login</Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* </Box> */}
    </div>
  );
};

export default Nav;
