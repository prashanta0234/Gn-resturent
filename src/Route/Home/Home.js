import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";

const Nav = React.lazy(() => import("../../Component/Nav/Nav"));
const Booking = React.lazy(() => import("../../Component/Booking/Booking"));
const Contact = React.lazy(() => import("../../Component/Contact/Contact"));
const Footer = React.lazy(() => import("../../Component/footer/Footer"));
const HomeFood = React.lazy(() => import("../../Component/HomeFood/HomeFood"));
const Offer = React.lazy(() => import("../../Component/Offer/Offer"));
const Banner = React.lazy(() => import("../../Component/Banner/Banner"));

const Home = () => {
  return (
    <div>
      <Suspense
        fallback={
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress color="success" />
          </Box>
        }
      >
        <Nav />
        <Banner></Banner>

        <HomeFood />
        <Offer />
        <Booking />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
