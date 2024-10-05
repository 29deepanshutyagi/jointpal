import React from "react";
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from "../components/header";
import BackButton from "../components/BackButton";
import anklegif1 from "./anklestretches/Achilles_Stretch.gif";
import anklegif2 from "./anklestretches/Chair_Pose.gif";
import anklegif3 from "./anklestretches/Band_Stretch.gif";
import anklegif4 from "./anklestretches/Cross_Leg_Ankle_Stretch.gif";
import anklegif5 from "./anklestretches/Towel_Stretch.gif";
import { ScrollRestoration } from "react-router-dom";

const ankle = () => {
  return (
    <>
      <Header />
      <BackButton />
      <div className="container">
        <div className="image-side">
          <img className="anklegif1" src={anklegif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Achilles Stretch</h1>
          <p>
            This stretch is essential for increasing flexibility and range of
            motion in the Achilles tendon and calf muscles, reducing the risk of
            injuries related to running and jumping, and aiding in the recovery
            of conditions like Achilles tendinitis.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Chair Pose</h1>
          <p>
            A yoga-based stretch, the chair pose strengthens the thighs, ankles,
            and spine, while also stretching the shoulders and chest, improving
            posture, and stimulating the abdominal organs, thus aiding in
            digestion and heart health.
          </p>
        </div>
        <div className="image-side">
          <img className="anklegif2" src={anklegif2} alt="stretch1" />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="image-side">
            <img className="anklegif3" src={anklegif3} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Band stretch</h1>
            <p>
              {" "}
              Utilizing a band for stretching can enhance flexibility and range
              of motion, particularly in hard-to-reach muscles, allows for
              controlled stretching that can be tailored to individual needs,
              and is particularly beneficial for rehabilitation and improving
              functional movements.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-side">
            <h1>Cross Ankle Stretch</h1>
            <p>
              This stretch is excellent for targeting the muscles and tendons
              around the ankle and lower leg, enhancing flexibility and
              circulation in these areas, and reducing the risk of injuries
              related to sports and physical activities.
            </p>
          </div>
          <div className="image-side">
            <img className="anklegif4" src={anklegif4} alt="stretch1" />
          </div>
        </div>

        <div className="container">
          <div className="image-side">
            <img className="anklegif5" src={anklegif5} alt="anklegif5" />
          </div>
          <div className="text-side">
            <h1>Towel Stretch</h1>
            <p>
              Ideal for gently stretching the muscles of the feet and calves,
              the towel stretch is particularly beneficial for individuals
              recovering from foot injuries, aiding in the alleviation of
              conditions like plantar fasciitis, and improving overall foot
              flexibility.
            </p>
          </div>
        </div>

        <ScrollRestoration />
      </div>
    </>
  );
};

export default ankle;
