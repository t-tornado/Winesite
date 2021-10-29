import React from "react";
import "../Styles/homepage.css";
import Navbar from "./navbar";
import TextSide from "./textSide";
import ImageSide from "./imagesSide";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <TextSide />
      <ImageSide />
    </div>
  );
};

export default Homepage;
