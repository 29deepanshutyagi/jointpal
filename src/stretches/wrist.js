import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';
import { ScrollRestoration } from "react-router-dom";
import wristgif1 from "./wriststretches/back-facing-wrist-stretch.gif";
import wristgif2 from "./wriststretches/rearfacingwristholds.gif";
import wristgif3 from "./wriststretches/wristflexor.gif";


const wrist = () => {
  return (
    <>
    <Header />
      <BackButton />
      <div className="container">
        <div className="image-side">
          <img className="wristgif1" src={wristgif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Back Facing Wrist Stretch</h1>
          <p>
          The Back Facing Wrist Stretch involves extending your arm forward with the back of your hand facing you 
          and gently applying pressure with the other hand to stretch the wrist back towards your body. This stretch 
          is particularly effective in relieving tension and tightness in the wrist extensors, which is beneficial for 
          those engaged in repetitive activities like typing or racquet sports, helping to prevent strain and improve 
          flexibility in the wrist and forearm area.

          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Rear Facing Wrist Holds</h1>
          <p>
          In this stretch, you extend your arms behind you, with palms facing outward, and gently pull the fingers towards 
          the body, effectively stretching the wrist flexors. This stretch is excellent for counteracting the effects of prolonged 
          forward wrist bending, as often occurs in activities involving prolonged gripping or keyboard use, helping to alleviate wrist
           and forearm tension and reduce the risk of repetitive strain injuries.

          </p>
        </div>
        <div className="image-side">
          <img className="wristgif2" src={wristgif2} alt="stretch1" />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="image-side">
            <img className="wristgif3" src={wristgif3} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Wrist Flexor Stretch</h1>
            <p>
            This stretch targets the muscles on the inside of the forearm. It's performed by extending the arm with the 
            palm facing up and gently pulling the fingers back towards the body. It's especially useful for individuals who 
            frequently use gripping motions or engage in activities that put repetitive stress on the wrist and forearm, as it 
            helps to reduce tightness in the wrist flexors, enhancing flexibility and preventing conditions like carpal tunnel syndrome.
            </p>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    </>

  );
};

export default wrist;
