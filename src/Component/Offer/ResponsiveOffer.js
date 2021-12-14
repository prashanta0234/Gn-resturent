// import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import { Box } from "@mui/system";
SwiperCore.use([Scrollbar, Autoplay]);

const ResponsiveOffer = ({ offers }) => {
  return (
    <div>
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
                <Grid container sx={{ mt: 3 }}>
                  <Grid item xs={12}>
                    <Card sx={{ maxWidth: 345 }} className="card">
                      <CardMedia
                        component="img"
                        image={offer?.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {offer?.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontFamily: "Lobster" }}
                        >
                          20% Off for {offer?.name}. Wed,Thu,Fri only.Limited
                          Offer! Order this Food Now.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default ResponsiveOffer;
