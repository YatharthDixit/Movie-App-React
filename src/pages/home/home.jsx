import React from "react";
import "./home.scss";
import HeroBanner from "./homeBanner/heroBanner";
import Trending from "./trending/trending";

HeroBanner;

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
