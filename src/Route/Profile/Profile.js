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

import swal from "sweetalert";

const Profile = () => {
  const { user, logOut } = UseFirebase();
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch(
      `https://warm-sands-69381.herokuapp.com/usingEmail?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [user]);
  console.log(booked);
  const handleDelate = (id) => {
    const proceed = window.confirm("Are you sure to cancel?");
    if (proceed) {
      const url = `https://warm-sands-69381.herokuapp.com/booked/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrder = booked.filter((order) => order._id !== id);
            setBooked(remainingOrder);
            swal("opps!", "cancel  Booked table!", "success");
          }
        });
    }
    console.log("yep its delated:");
  };
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
                    <Card sx={{ width: "100%", py: 3, mt: 2 }}>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          textAlign: "center",

                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={5} md={3}>
                          {book?.Name} <br />
                          {book?.MobileNumber}
                        </Grid>{" "}
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={3}>
                          Person: {book?.person} <br />
                          Occasion: {book?.ocetion}
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={3}>
                          Date: {book?.date} <br />
                          Time: {book?.time}
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={5} md={2}>
                          <Button sx={{}} variant="outlined">
                            Advanced
                          </Button>
                          <br />
                          <Button
                            sx={{ color: "red", mt: 1 }}
                            variant="outlined"
                            onClick={() => handleDelate(book?._id)}
                          >
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
