import { Button, Container, Stack, TextField, Typography } from "@mui/material";
// import { DatePicker } from "@mui/lab";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseFirebase from "../Hooks/UseFirebase";
import swal from "sweetalert";

import "./Booking.css";
const axios = require("axios");

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

const Booking = () => {
  const { user } = UseFirebase();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/booked", {
        data,
      })
      .then(function (response) {
        console.log(response);
        swal("Good job!", "Booked Successful!", "success");
        reset();
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Name"
                {...register("Name", { required: true, maxLength: 80 })}
                className="input"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="input"
                {...register("MobileNumber", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <input
                type="tel"
                placeholder="Number of Person"
                className="input"
                {...register("person", {
                  required: true,
                  minLength: 1,
                  maxLength: 6,
                })}
              />

              <select {...register("ocetion", { required: true })}>
                {occesions.map((option) => (
                  <option value={option?.value}>{option?.value}</option>
                ))}
              </select>

              <Stack component="form" noValidate spacing={3}>
                <TextField
                  id="date"
                  label="Date"
                  {...register("date", { required: true })}
                  type="date"
                  defaultValue="2021-11-25"
                  color="warning"
                  // sx={{ width: 220 }}
                  sx={{
                    width: "100%",

                    mt: 1,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="time"
                  label="Select time"
                  {...register("time", { required: true })}
                  type="time"
                  color="warning"
                  defaultValue="07:30"
                  sx={{
                    width: "100%",

                    mt: 1,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Stack>

              {user?.email ? (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ my: 2, py: 1, px: 5 }}
                >
                  Book
                </Button>
              ) : (
                <Link to="/login">
                  {" "}
                  <Button
                    variant="contained"
                    sx={{ my: 2, py: 1, px: 5, fontFamily: "roboto" }}
                  >
                    Please Login
                  </Button>
                </Link>
              )}
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Booking;
