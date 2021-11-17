import React from "react";
import "../Styles/homepage.css";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo"></img>
    </div>
  );
};

export default Navbar;
