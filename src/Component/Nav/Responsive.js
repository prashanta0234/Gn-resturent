import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import MenuIcon from "@mui/icons-material/Menu";
const Responsive = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className="nav">
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link smooth to="/home">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link smooth to="/home#foods">
                Foods
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link smooth to="/home#booking">
                Book Table
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link smooth to="/home#contact">
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "red", fontSize: "40px" }} />
      </IconButton>
    </>
  );
};

export default Responsive;
