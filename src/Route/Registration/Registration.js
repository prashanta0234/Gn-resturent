import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import React from "react";
import "../Login/Login.css";

import UseFirebase from "../../Component/Hooks/UseFirebase";

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { registration } = UseFirebase();

  const onSubmit = (data) => {
    registration(data.email, data.password, data.name, location, history);
    console.log(data);
  };
  return (
    <div className="login">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              boxShadow: 3,
              mt: 15,
              mb: 5,
              width: "40%",
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
                Sign Up
              </Typography>
              <label for="name">Enter Your Name:</label> <br />
              <input {...register("name", { required: true })} />
              <label for="email">Enter Your Email:</label> <br />
              <input type="email" {...register("email", { required: true })} />
              <label for="password">Enter Your Password:</label> <br />
              <input
                type="password"
                {...register("password", { minLength: 5 })}
              />
              <label for="repassword">Re-Enter Your Password:</label> <br />
              <input
                type="password"
                {...register("password1", { minLength: 5 })}
              />
              <Button
                variant="contained"
                type="submit"
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
                Already have an account?<Link to="/login"> Please Sign in</Link>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
