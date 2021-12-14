import React, { Suspense } from "react";
import {
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";

import "./Login.css";
// import { user, googleLogin } from "../../Component/Hooks/UseFirebase";
import UseFirebase from "../../Component/Hooks/UseFirebase";

const ResponsiveLog = React.lazy(() => import("./ResponsiveLog.js"));

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user, userLogin } = UseFirebase();
  const location = useLocation();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onSubmit = (data) => {
    userLogin(data.email, data.password, location, history);
    console.log(user);
  };
  console.log(user);
  return (
    <div className="login">
      <Suspense
        fallback={
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress color="success" />
          </Box>
        }
      >
        {isMobile ? (
          <ResponsiveLog userLogin={userLogin} />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  boxShadow: 3,
                  my: 15,
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
        )}
      </Suspense>
    </div>
  );
};

export default Login;
