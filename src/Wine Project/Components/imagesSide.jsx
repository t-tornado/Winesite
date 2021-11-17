import React from "react";
import "../Styles/homepage.css";
import wine1 from "../assets/wine1.jpg";

const ImageSide = () => {
  return (
    <div className="imageSection">
      <img src={wine1} alt="Wine" className="wineImage"></img>
    </div>
  );
};

export default ImageSide;
