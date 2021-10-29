import React from "react";
import "../Styles/homepage.css";
import wine from "../assets/wineBottle.png";
import GetStartedButton from "./GetStartedButton";
import { Navbar } from "./navBar";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeHeader">
        <span>Know your wine and wineries</span>
      </div>
      <div className="curve"></div>
      <div className="image-section">
        <img src={wine} alt="Wine"></img>
      </div>
      <GetStartedButton />
    </div>
  );
};

export default Homepage;
