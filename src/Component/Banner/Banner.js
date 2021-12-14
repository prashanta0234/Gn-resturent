import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundSlider from "react-background-slider";
import { HashLink as Link } from "react-router-hash-link";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import baner1 from "../../images/1stbanner.jpg";
import baner2 from "../../images/2ndbanner.jpg";
import baner3 from "../../images/banner3rd.jpg";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Box } from "@mui/system";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <BackgroundSlider
        images={[baner1, baner2, baner3]}
        duration={4}
        transition={2}
      />
      <>
        {isMobile ? (
          <Container sx={{ mb: 12 }}>
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
                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        variant="h1"
                        sx={{
                          fontWeight: 700,
                          fontSize: "40px",
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
                          fontSize: "20px",
                          mt: 2,
                          color: "#7A7A7A",
                        }}
                      >
                        See our all hygienic food in Online store. <br /> You
                        can order your food.
                      </Typography>
                      <Link smooth to="/home#foods">
                        <Button
                          sx={{
                            bgcolor: "#A60101",
                            py: 1,
                            px: 4,
                            fontSize: "15px",
                            color: "white",
                            fontFamily: "Lobster",
                            mt: 1,
                          }}
                        >
                          Foods
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Grid container spacing={2} sx={{ my: 5 }}>
                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        variant="h1"
                        sx={{
                          fontWeight: 700,
                          fontSize: "40px",
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
                          fontSize: "20px",
                          mt: 1,
                          color: "#7A7A7A",
                        }}
                      >
                        We have more than 100 foods. <br /> Please Check our
                        Menu.
                      </Typography>
                      <Link smooth to="/home#foods">
                        <Button
                          sx={{
                            bgcolor: "#A60101",
                            py: 1,
                            px: 4,
                            fontSize: "15px",
                            color: "white",
                            fontFamily: "Lobster",
                            mt: 1,
                          }}
                        >
                          Foods
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <Grid container spacing={2} sx={{ my: 5 }}>
                  <Grid item xs={12}>
                    <Box>
                      <Typography
                        variant="h1"
                        sx={{
                          fontWeight: 700,
                          fontSize: "40px",
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
                          fontSize: "20px",
                          mt: 1,
                          color: "#7A7A7A",
                        }}
                      >
                        You can book your table Online!
                      </Typography>
                      <Link smooth to="/home#booking">
                        <Button
                          sx={{
                            bgcolor: "#d99e07",
                            py: 1,
                            px: 4,
                            fontSize: "15px",
                            color: "white",
                            mt: 1,
                            fontFamily: "Lobster",
                          }}
                        >
                          Booking
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Container>
        ) : (
          <Container sx={{ mb: 12 }}>
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
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h1"
                        sx={{
                          fontWeight: 700,
                          fontSize: "4.375rem",
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
                        See our all hygienic food in Online store. <br /> You
                        can order your food.
                      </Typography>
                      <Link smooth to="/home#foods">
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
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Grid container spacing={2} sx={{ my: 5 }}>
                  <Grid item xs={12} md={6}>
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
                        We have more than 100 foods. <br /> Please Check our
                        Menu.
                      </Typography>
                      <Link smooth to="/home#foods">
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
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <Grid container spacing={2} sx={{ my: 5 }}>
                  <Grid item xs={12} md={6}>
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
                      <Link smooth to="/home#booking">
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
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Container>
        )}
      </>
    </div>
  );
};

export default Banner;
