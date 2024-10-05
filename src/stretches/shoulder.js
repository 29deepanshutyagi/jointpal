import React from "react";
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from "../components/header";
import BackButton from "../components/BackButton";
import shouldergif1 from "./shoulderstretches/crossarmstrech.webp";
import shouldergif2 from "./shoulderstretches/shoulderraises.webp";
import shouldergif3 from "./shoulderstretches/standingarmcircles.webp";
import shouldergif4 from "./shoulderstretches/wideleggedforewardbend.webp";
import { ScrollRestoration } from "react-router-dom";

const shoulder = () => {
  return (
    <>
      <Header />
      <BackButton />
      <div className="container">
        <div className="image-side">
          <img className="shouldergif1" src={shouldergif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Cross Arm Stretch</h1>
          <p>
            This stretch effectively releases tension in the shoulder muscles
            and upper back, increasing flexibility and range of motion, which is
            particularly beneficial for those engaged in desk work or repetitive
            upper body activities, helping to alleviate shoulder and neck
            discomfort.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Shoulder Raises</h1>
          <p>
            Shoulder raises strengthen the deltoids and trapezius muscles,
            improve overall shoulder and spinal alignment, and are beneficial
            for activities involving lifting or overhead movements, thereby
            contributing to reduced risk of shoulder-related injuries and
            improved postural support.
          </p>
        </div>
        <div className="image-side">
          <img className="shouldergif2" src={shouldergif2} alt="stretch1" />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="image-side">
            <img className="shouldergif3" src={shouldergif3} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Standing Arm Circles</h1>
            <p>
              This stretch enhances shoulder mobility and flexibility, tones the
              muscles around the shoulders and upper arms, and is ideal for
              warming up the upper body prior to engaging in physical
              activities, which helps in preventing muscle strains and injuries.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-side">
            <h1>Wide-Legged Forward Bend</h1>
            <p>
              This stretch not only increases flexibility in the hamstrings,
              hips, and lower back but also helps in improving circulation,
              relieving tension in the spine, and can have a calming effect on
              the mind, making it especially beneficial for those seeking to
              enhance overall body flexibility and reduce stress.
            </p>
          </div>
          <div className="image-side">
            <img className="shouldergif4" src={shouldergif4} alt="stretch1" />
          </div>
        </div>

        <ScrollRestoration />
      </div>
    </>
  );
};

export default shoulder;
