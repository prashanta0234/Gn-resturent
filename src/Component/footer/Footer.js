import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";

import logo from "../../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import AddLocationSharpIcon from "@mui/icons-material/AddLocationSharp";
import DraftsSharpIcon from "@mui/icons-material/DraftsSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ color: "white", textAlign: "center" }}>
        <img src={logo} alt="" width="200px" />
        <Grid container spacing={2} sx={{ mt: 3, pb: 5 }}>
          <Grid item xs={10} md={2} sx={{ fontFamily: "Lobster Two" }}>
            <Link smooth to="/home" sx={{ color: "white" }}>
              Home
            </Link>{" "}
            <br />
            <Link smooth to="/home#foods" sx={{ color: "white" }}>
              Foods
            </Link>{" "}
            <br />
            <Link smooth to="/home#booking" sx={{ color: "white" }}>
              Book Table
            </Link>{" "}
            <br />
            <Link smooth to="/home#contact" sx={{ color: "white" }}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography>
              <a
                target="_blank"
                href="http://www.facebook.com/"
                title="example"
              >
                <FacebookIcon />
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/prashanta-chakraborty-b653491aa/"
                title="example"
              >
                <LinkedInIcon />
              </a>
              <br />
              <a
                target="_blank"
                href="https://github.com/prashanta0234"
                title="example"
              >
                <GitHubIcon />
              </a>
              <br />
              <a target="_blank" href="https://www.reddit.com/" title="example">
                <RedditIcon />
              </a>
            </Typography>
          </Grid>
          <Grid item xs={10} md={5}>
            <Typography variant="h4" sx={{ color: "tomato" }}>
              {" "}
              Subscribe
            </Typography>
            <Typography variant="h6" sx={{ my: 2 }}>
              {" "}
              For notify about our offer please subscribe Us!
            </Typography>
            <TextField
              hiddenLabel
              id="filled-hidden-label-normal"
              defaultValue="@gmail.com"
              sx={{
                bgcolor: "white",
                borderRadius: "10px",
                width: "70%",
                fontFamily: "Lobster",
              }}
              variant="filled"
            />{" "}
            <br />
            <Button variant="contained" sx={{ my: 3 }}>
              SubsCribe
            </Button>
          </Grid>

          <Grid item xs={10} md={3}>
            <Typography variant="h4" sx={{ color: "tomato" }}>
              Contact
            </Typography>
            <Box sx={{ textAlign: "left", pl: 2 }}>
              <Typography>
                {" "}
                <AddLocationSharpIcon /> &nbsp; Dhaka ,Bangladesh{" "}
              </Typography>
              <Typography>
                {" "}
                <DraftsSharpIcon /> &nbsp; prashanta0234@gmail.com{" "}
              </Typography>
              <Typography>
                {" "}
                <LocalPhoneSharpIcon /> &nbsp; 01754540***{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <hr />
        <Typography variant="h6" sx={{ py: 2 }}>
          &copy; All right reserved by Prashanta
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
