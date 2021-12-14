import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import "../Lunch/Lunch.css";

const Breakfast = () => {
  const [lunchs, setLunches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods/61b6681a591c0477ef5f3725")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);
  console.log(lunchs);
  return (
    <div className="lunch">
      <Box sx={{ textAlign: "center" }}>
        <Grid container spacing={2}>
          {lunchs.map((lunch) => (
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  component="img"
                  height="300"
                  image={lunch?.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {lunch?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "Lobster" }}
                  >
                    {lunch?.des}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {lunch?.price} ৳
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Breakfast;
