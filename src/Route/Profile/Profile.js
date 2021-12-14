import {
  Avatar,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import UseFirebase from "../../Component/Hooks/UseFirebase";
import Nav from "../../Component/Nav/Nav";

const Profile = () => {
  const { user, logOut } = UseFirebase();
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booked")
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);
  console.log(booked);
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
                  <br />

                  <Button onClick={logOut} sx={{ mt: 2 }}>
                    Logout
                  </Button>
                </Box>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={12} md={8}>
                <Typography variant="h4">Booked Table</Typography>
                <Box sx={{ mt: 5 }}>
                  {booked.map((book) => (
                    <Card sx={{ width: "100%", py: 3 }}>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          textAlign: "center",

                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={5} md={3}>
                          {book?.data.Name} <br />
                          {book?.data.MobileNumber}
                        </Grid>{" "}
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={3}>
                          Person: {book?.data.person} <br />
                          Occasion: {book?.data.ocetion}
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={3}>
                          Date: {book?.data.date} <br />
                          Time: {book?.data.time}
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={2}>
                          <Button sx={{}} variant="outlined">
                            {" "}
                            Advanced
                          </Button>{" "}
                          <br />
                          <Button
                            sx={{ color: "red", mt: 1 }}
                            variant="outlined"
                          >
                            {" "}
                            <CancelIcon /> &nbsp; Cancel
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
