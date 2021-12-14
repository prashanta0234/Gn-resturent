import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import UseFirebase from "../../Component/Hooks/UseFirebase";
import Nav from "../../Component/Nav/Nav";

const Profile = () => {
  const { user, logOut } = UseFirebase();
  return (
    <div>
      <Nav />
      <Box sx={{ mt: 2, bgcolor: "	#EFF0F4", minHeight: "100vh" }}>
        <Container>
          <Container>
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              <Grid item xs={12} md={3}>
                <Avatar
                  alt="Remy Sharp"
                  src={user?.photoURL}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h5">{user?.displayName}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography>
                    <NavLink to="#">Orders</NavLink>
                  </Typography>
                  <br />
                  <Typography>
                    <NavLink to="#">Booked Table</NavLink>
                  </Typography>
                  <Button onClick={logOut} sx={{ mt: 2 }}>
                    Logout
                  </Button>
                </Box>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={12} md={8}>
                Order information
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
