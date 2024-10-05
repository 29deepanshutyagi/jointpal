import React from "react";
import "./bodymap.css";
import anatomy from "./bodymap.jpg";
import { Link } from "react-router-dom";
const Bodymap = () => {
  return (
    <div className="bodymap">
      <img src={anatomy} className="anatomy" />

    
      <Link to="/neck">
      <button className="neck"></button>
      </Link>
      
      <Link to="/elbow">
      <button className="elbowLeft"></button>
      <button className="elbowRight"></button>
      </Link>

      <Link to="/shoulder">
      <button className="shoulderLeft"></button>
      <button className="shoulderRight"></button>
      </Link>

      <Link to="/knee">
      <button className="kneeLeft"></button>
      <button className="kneeRight"></button>
      </Link>

      <Link to="/wrist">
      <button className="wristLeft"></button> 
      <button className="wristRight"></button> 
      </Link>

      <Link to="/hip">
      <button className="hipLeft"></button>
      <button className="hipRight"></button>
      </Link>  

      <Link to="/ankle">
      <button className="ankleLeft"></button>
      <button className="ankleRight"></button>
      </Link>  

    </div>
  );
};

export default Bodymap;
