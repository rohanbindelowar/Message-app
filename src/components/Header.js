import React from "react";
import "../styles/Header.css";
import logo from "../assets/image/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="heading"> Message App</div>
    </div>
  );
};
export default Header;
