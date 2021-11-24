import React from "react";
import Banner from "./Banner/Banner";
import HomeFood from "./HomeFood/HomeFood";
import Offer from "./Offer/Offer";
// import Banner from "./Banner/Banner";
// import Nav from "./Nav/Nav";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeFood></HomeFood>
      <Offer></Offer>
    </div>
  );
};

export default Home;
