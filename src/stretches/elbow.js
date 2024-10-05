import React from "react";
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from "../components/header";
import BackButton from "../components/BackButton";
import { ScrollRestoration } from "react-router-dom";
import elbowgif1 from "./elbowstretches/FlexorStretch.gif";
import elbowgif2 from "./elbowstretches/WristExtensor.gif";


const Elbow = () => {
  return (
    <>
      <Header />
      <BackButton />

      <div className="container">
        <div className="image-side">
          <img className="elbowgif1" src={elbowgif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Flexor Stretch</h1>
          <p>
          The flexor stretch, which targets the muscles on the inside of the forearm, involves extending 
          the arm and gently pulling back the fingers or palm, helping to alleviate tension and tightness in 
          the wrist flexors that are often overused in activities like typing or gripping, thus effectively reducing 
          the risk of conditions like carpal tunnel syndrome and improving overall wrist and hand flexibility.

          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Wrist Extensor Stretch</h1>
          <p>
          This stretch focuses on the muscles on the top of the forearm and is performed by extending the arm and gently pulling the back of the hand towards the body, which is particularly beneficial for those engaging in activities that require repetitive wrist extension, like lifting or certain sports, as it helps to relieve tension in the wrist extensors, preventing strain and enhancing flexibility in the wrist and forearm area.


          </p>
        </div>
        <div className="image-side">
          <img className="elbowgif2" src={elbowgif2} alt="stretch1" />
        </div>

        <ScrollRestoration />
      </div>
    </>
  );
};

export default Elbow;