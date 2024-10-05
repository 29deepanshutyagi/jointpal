import React from "react";
import "../App.css";
import headerlogo from "../stretch-logo.png";
import { Link } from "react-router-dom";


function Header() {
    return(
    <Link to="/" style={{ textDecoration: "none"}}>
  <header className="App-header">
    <img className="App-logo" src={headerlogo} />
    <title>JointPal.ai</title>
  </header>

    </Link>
    );
};




export default Header;
