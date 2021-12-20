import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import ResponsiveOffer from "./ResponsiveOffer";
SwiperCore.use([Scrollbar, Autoplay]);

const Offer = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://warm-sands-69381.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  console.log(offers);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box sx={{ py: 8, bgcolor: "#e7e7e7", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Lobster Two", color: "#A60101" }}
        >
          Our Offers
        </Typography>

        <Box>
          {isMobile ? (
            <ResponsiveOffer offers={offers}></ResponsiveOffer>
          ) : (
            <>
              <Swiper
                scrollbar={{
                  hide: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper"
              >
                {offers.map((offer) => (
                  <SwiperSlide>
                    <Container>
                      <Grid container sx={{ mt: 5 }}>
                        <Grid item md={8}>
                          <Box sx={{ height: "400px" }}>
                            <img src={offer?.img} width="100%" alt="food"></img>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          md={4}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              height: "230px",
                              width: "100%",
                              bgcolor: "white",
                              ml: -12,
                              textAlign: "left",
                            }}
                          >
                            <Box
                              sx={{
                                width: "50px",
                                height: "30px",
                                bgcolor: "#5c5c5c",
                                top: 0,
                                left: 0,
                                borderBottomRightRadius: "5px",
                              }}
                            >
                              {" "}
                              <Typography sx={{ p: 0.5, color: "white" }}>
                                {offer?.price} ৳
                              </Typography>{" "}
                            </Box>
                            <Box sx={{ py: 1, px: 2 }}>
                              <Typography variant="h5" sx={{ color: "black" }}>
                                {" "}
                                20% Off for {offer?.name}. Wed,Thu,Fri
                                only.Limited Offer! Order this Food Now.
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Container>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Offer;
