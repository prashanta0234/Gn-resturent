import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import contact from "../../images/105381-OMRNIJ-466.jpg";

const Contact = () => {
  return (
    <div id="contact">
      <Box sx={{ bgcolor: "#FBFCFC" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img src={contact} alt="" width="100%"></img>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "70%", textAlign: "center" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Your Name"
                  variant="outlined"
                  required
                  sx={{ mt: 1 }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Enter Your Email"
                  variant="outlined"
                  type="email"
                  required
                  sx={{ mt: 1 }}
                  fullWidth
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  required
                  sx={{ mt: 3 }}
                  fullWidth
                />
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Lobster",
                    width: "100%",
                    mt: 3,
                    cursor: "pointer",
                  }}
                >
                  Mail Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
