import React from "react";
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from "../components/header";
import BackButton from "../components/BackButton";
import hipgif1 from "./hipstretches/bridging-exercise-gif.gif";
import hipgif2 from "./hipstretches/hip-extension-gif.gif";
import hipgif3 from "./hipstretches/double-hip-rotation-gif.gif";
import hipgif4 from "./hipstretches/hip-flexion-gif.gif";
import { ScrollRestoration } from "react-router-dom";

const hip = () => {
  return (
    <>
      <Header />
      <BackButton />
      <div className="container">
        <div className="image-side">
          <img className="hipgif1" src={hipgif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Bridge Stretch</h1>
          <p>
            This stretch not only strengthens the glutes, crucial for
            alleviating lower back pain, but also improves core stability and
            spinal alignment while enhancing hip mobility, making it beneficial
            for activities that involve bending and lifting.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Double Hip Rotation Stretch</h1>
          <p>
            By increasing flexibility in the hip rotators, this stretch aids in
            rotational movements, reduces tension in the lower back and hips to
            help relieve sciatica symptoms, and enhances overall hip joint
            mobility, which is beneficial for a wide range of sports and daily
            activities.
          </p>
        </div>
        <div className="image-side">
          <img className="hipgif2" src={hipgif2} alt="stretch1" />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="image-side">
            <img className="hipgif3" src={hipgif3} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Hip Extension Stretch</h1>
            <p>
              Targeting the hip flexors and quadriceps, the hip extension
              stretch helps prevent tightness in these areas, improves posture
              by reducing anterior pelvic tilt, and aids in enhancing stride
              length and efficiency for activities like running and walking.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-side">
            <h1>Hip Flexion Stretch</h1>
            <p>
              This stretch effectively lengthens and relaxes the glutes and
              hamstrings, supports improved range of motion in the hip joint
              crucial for squatting and bending, and can alleviate discomfort
              associated with prolonged sitting, common in sedentary lifestyles
            </p>
          </div>
          <div className="image-side">
            <img className="hipgif4" src={hipgif4} alt="stretch1" />
          </div>
        </div>
        <ScrollRestoration />
      </div>
    </>
  );
};

export default hip;
