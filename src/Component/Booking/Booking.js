import {
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "./Booking.css";

const occesions = [
  {
    value: "Bithday",
    label: "Bithday",
  },
  {
    value: "Christmas",
    label: "Christmas",
  },
  {
    value: "Marriage",
    label: "Marriage",
  },
  {
    value: "Normal",
    label: "Normal",
  },
];
const persons = [
  {
    value: "2",
    label: "2",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "6",
    label: "6",
  },
];

const Booking = () => {
  const [person, setperson] = React.useState(2);
  const [occesion, setoccesion] = React.useState("Normal");

  const handleChange = (event) => {
    setperson(event.target.value);
  };
  const handleChange1 = (e) => {
    setoccesion(e.target.value);
  };

  return (
    <div className="booking" id="booking">
      <Container>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", pt: 3, color: "#ffba08" }}
        >
          Book a Table{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: "50%",
              textAlign: " center",
            }}
          >
            <TextField
              id="outlined-basic"
              label=" Your name"
              variant="outlined"
              color="warning"
              sx={{
                width: "100%",

                my: 1,
              }}
              inputProps={{
                style: {
                  color: "white",
                  borderColor: "white",
                  fontFamily: "Lobster",
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label=" Your Number"
              variant="outlined"
              color="warning"
              type="number"
              sx={{
                width: "100%",

                my: 1,
              }}
              //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              inputProps={{
                style: {
                  color: "white",
                  borderColor: "white",
                  fontFamily: "Lobster",
                },
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Number Of Person"
              value={person}
              onChange={handleChange}
              color="warning"
              //   helperText="Please select your currency"
              sx={{
                width: "100%",

                my: 1,
              }}
            >
              {persons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Number Of Person"
              value={occesion}
              onChange={handleChange1}
              color="warning"
              //   helperText="Please select your currency"
              sx={{
                width: "100%",

                my: 1,
              }}
            >
              {occesions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2021-11-25"
                color="warning"
                // sx={{ width: 220 }}
                sx={{
                  width: "100%",

                  my: 1,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="time"
                label="Select time"
                type="time"
                color="warning"
                defaultValue="07:30"
                sx={{
                  width: "100%",

                  my: 1,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Stack>

            <Button variant="contained" sx={{ my: 2, py: 1, px: 5 }}>
              Book
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Booking;
