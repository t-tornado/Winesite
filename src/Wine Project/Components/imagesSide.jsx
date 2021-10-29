import React from "react";
import "../Styles/homepage.css";
import wine1 from "../assets/wine1.jpg";

export default () => {
  return (
    <div className="imageSection">
      <img src={wine1} className="wineImage"></img>
    </div>
  );
};
