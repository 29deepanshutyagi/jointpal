import React from "react";
import "./stretches.css";
import kneegif1 from "./kneestretches/CalfRaises.webp";
import kneegif2 from "./kneestretches/HalfSquat.webp";
import kneegif3 from "./kneestretches/HipAbduction.webp";
import kneegif4 from "./kneestretches/StandingCalfStretch.webp";
import kneegif5 from "./kneestretches/StraightLegRaise.webp";
import kneegif6 from "./kneestretches/SupineHamstringStretch.webp";
import headerlogo from "../stretch-logo.png";
import Header from "../components/header";
import BackButton from "../components/BackButton";
import { ScrollRestoration } from "react-router-dom";

const knee = () => {
  return (
    <>
      <Header />
      <BackButton />
      <div className="container">
        <div className="image-side">
          <img className="kneegif1" src={kneegif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Calf Raises</h1>
          <p>
            Calf raises, which involve standing on your toes and lowering your
            heels below the surface before rising back up, strengthen calf
            muscles to support the lower leg and reduce strain on the knee
            joint.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Half Squat Hip Abduction</h1>
          <p>
            Half squat hip abduction, where you perform a half squat and then
            lift one leg to the side and back, improves hip and glute strength
            for better knee alignment and reduced knee pain.
          </p>
        </div>
        <div className="image-side">
          <img className="kneegif2" src={kneegif2} alt="stretch2" />
        </div>
      </div>

      <div className="container">
        <div className="image-side">
          <img className="kneegif3" src={kneegif3} alt="stretch3" />
        </div>
        <div className="text-side">
          <h1>Standing Calf Stretch</h1>
          <p>
            The standing calf stretch, executed by standing facing a wall with
            one foot back and leaning forward, stretches the calf muscles to
            reduce tightness that can impact knee movement and alignment.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Straight Leg Raise</h1>
          <p>
            Straight leg raises, done by lying on your back and lifting one leg
            straight up while keeping the knee slightly bent, strengthen the
            quadriceps to support and stabilize the knee joint.
          </p>
        </div>
        <div className="image-side">
          <img className="kneegif4" src={kneegif4} alt="stretch4" />
        </div>
      </div>

      <div className="container">
        <div className="image-side">
          <img className="kneegif5" src={kneegif5} alt="stretch5" />
        </div>
        <div className="text-side">
          <h1>Supine Hamstring Stretch</h1>
          <p>
            The supine hamstring stretch, involving lying on your back, lifting
            one leg up, and gently pulling it towards your torso, reduces
            hamstring tightness to alleviate pulling and stress on the knee.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Standing Hamstring Stretch</h1>
          <p>
            Standing hamstring stretches, where you stand upright, place one
            foot in front of you with toes up, and lean forward slightly from
            the hips, stretch the hamstrings to promote flexibility and reduce
            strain on the back of the knee.
          </p>
        </div>
        <div className="image-side">
          <img className="kneegif6" src={kneegif6} alt="stretch6" />
        </div>
        <ScrollRestoration />
      </div>
    </>
  );
};

export default knee;
