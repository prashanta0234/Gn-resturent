import React from "react";

import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";

const ResponsiveLog = (userLogin) => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const onSubmit = (data) => {
    userLogin(data.email, data.password, location, history);
  };
  return (
    <div>
      <div className="login">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                boxShadow: 3,
                my: 15,
                width: "90%",
                bgcolor: "white",
                mx: "auto",
                border: "2px solid #A60101",
                borderRadius: "10px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", color: "#ff0000" }}
                >
                  Sign in
                </Typography>
                <label for="lname">Enter Your Email:</label> <br />
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                <label for="lname">Enter Your Password:</label> <br />
                <input
                  type="password"
                  {...register("password", { minLength: 5 })}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    height: "40px",
                    marginTop: "10px",
                    backgroundColor: "#a60101",
                    color: " white",
                  }}
                >
                  Login
                </Button>
                <Typography sx={{ textAlign: "center" }}>
                  Are You New?<Link to="/registration"> Please Sign Up</Link>
                </Typography>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ResponsiveLog;
