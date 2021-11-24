import React from "react";
import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundSlider from "react-background-slider";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import baner1 from "../../../images/1stbanner.png";
import baner2 from "../../../images/2ndbanner.jpg";
import baner3 from "../../../images/banner3rd.jpg";
// import "swiper/swiper-bundle.min.css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Box } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  return (
    <div>
      <BackgroundSlider
        images={[baner1, baner2, baner3]}
        duration={4}
        transition={2}
      />
      <>
        <Container sx={{ mb: 15 }}>
          <Swiper
            //   direction={"vertical"}
            spaceBetween={30}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="swiper"
          >
            <SwiperSlide className="swiper-slide">
              <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={10} md={6}>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 700,
                        fontSize: "70px",
                        color: "#A60101",
                        fontFamily: "Lobster Two",
                      }}
                      className="banerHeader"
                    >
                      {" "}
                      Visit Our <br /> Online Shop
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lobster",
                        fontSize: "30px",
                        mt: 2,
                        color: "#7A7A7A",
                      }}
                    >
                      See our all hygienic food in Online store. <br /> You can
                      order your food.
                    </Typography>
                    <Button
                      sx={{
                        bgcolor: "#A60101",
                        py: 1,
                        px: 4,
                        fontSize: "20px",
                        color: "white",
                        fontFamily: "Lobster",
                        mt: 3,
                      }}
                    >
                      Foods
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={10} md={6}>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 700,
                        fontSize: "70px",
                        color: "#9DA246",
                        fontFamily: "Lobster Two",
                      }}
                      className="banerHeader"
                    >
                      See Our <br /> Menu
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lobster",
                        fontSize: "30px",
                        mt: 2,
                        color: "#7A7A7A",
                      }}
                    >
                      We have more than 100 foods. <br /> Please Check our Menu.
                    </Typography>
                    <Button
                      sx={{
                        bgcolor: "#9DA246",
                        fontFamily: "Lobster",
                        py: 1,
                        px: 4,
                        fontSize: "20px",
                        color: "white",
                        mt: 3,
                      }}
                    >
                      Foods
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={10} md={6}>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 700,
                        fontSize: "70px",
                        color: "#d99e07",
                        fontFamily: "Lobster Two",
                      }}
                      className="banerHeader"
                    >
                      Book Your <br /> Table
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Lobster",
                        fontSize: "30px",
                        mt: 2,
                        color: "#7A7A7A",
                      }}
                    >
                      You can book your table Online!
                    </Typography>
                    <Button
                      sx={{
                        bgcolor: "#d99e07",
                        py: 1,
                        px: 4,
                        fontSize: "20px",
                        color: "white",
                        mt: 3,
                        fontFamily: "Lobster",
                      }}
                    >
                      Booking
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          </Swiper>
        </Container>
      </>
    </div>
  );
};

export default Banner;
