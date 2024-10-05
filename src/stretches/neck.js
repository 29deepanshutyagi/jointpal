
import React from 'react';
import "../App.css";
import logo from "../logo.svg";
import headerlogo from "../stretch-logo.png";
import Header from '../components/header';
import BackButton from '../components/BackButton';
import neckgif1 from "./neckstretches/BackwardsNeckStretch.gif";
import neckgif2 from "./neckstretches/FullNeckRotation.gif";
import neckgif3 from "./neckstretches/HandStretchWithNeck.gif";
import neckgif4 from "./neckstretches/NeckHandTwist.gif";
import neckgif5 from "./neckstretches/NeckSqueeze.gif";
import { ScrollRestoration } from "react-router-dom";



const neck = () => {
  return (
    <>
    <Header />
    <BackButton />
    <div className="container">
        <div className="image-side">
          <img className="neckgif1" src={neckgif1} alt="stretch1" />
        </div>
        <div className="text-side">
          <h1>Backwards Neck Stretch</h1>
          <p>
          This stretch involves gently tilting the head backwards to stretch the front part of the neck,
           which is especially beneficial for those who spend long hours in front of a computer or looking 
           down at their phones, as it helps to counteract the effects of forward head posture by stretching 
           the often-neglected anterior neck muscles, thus aiding in reducing neck stiffness and improving posture.

          </p>
        </div>
      </div>

      <div className="container">
        <div className="text-side">
          <h1>Full Neck Rotation</h1>
          <p>
          Full neck rotation involves slowly turning the head from side to side and then up and down in a 
          smooth, circular motion, which not only increases flexibility and range of motion in the neck but 
          also helps to alleviate tension in the neck and upper shoulder region, making it particularly useful 
          for those experiencing stiffness or pain due to poor posture, stress, or prolonged sitting.

          </p>
        </div>
        <div className="image-side">
          <img className="neckgif2" src={neckgif2} alt="stretch1" />
        </div>
      </div>
      <div>
        <div className="container">
          <div className="image-side">
            <img className="neckgif3" src={neckgif3} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Hand Stretch with Neck</h1>
            <p>
            This stretch combines a hand stretch—extending the fingers and wrists—with simultaneous neck movements, 
            such as tilting or gently turning the head, which not only helps in relieving tension in the hands and wrists, 
            common in activities involving repetitive motions like typing or knitting, but also simultaneously addresses neck 
            stiffness, thereby promoting overall upper body relaxation and flexibility.

            </p>
          </div>
        </div>

        <div className="container">
          <div className="text-side">
            <h1>Neck-Hand Twist</h1>
            <p>
            The Neck-Hand Twist involves a combination of twisting your neck gently to one side while 
            simultaneously stretching the opposite hand, usually by extending the arm and gently pulling the 
            fingers back. This dual-action stretch effectively relieves tension both in the neck and in the wrist 
            and forearm, making it particularly beneficial for individuals who experience discomfort from prolonged 
            computer use, repetitive hand motions, or those with mild neck stiffness.

            </p>
          </div>
          <div className="image-side">
            <img className="neckgif4" src={neckgif4} alt="stretch1" />
          </div>
        </div>
        <div className="container">
          <div className="image-side">
            <img className="neckgif5" src={neckgif5} alt="hipgif3" />
          </div>
          <div className="text-side">
            <h1>Neck Squeeze</h1>
            <p>
            The Neck Squeeze typically involves using both hands to gently apply pressure on either side 
            of the neck or at the base of the skull. This can help to release muscle tension, improve blood 
            circulation, and reduce stress in the neck muscles. It's especially useful for those who carry stress
             in their upper body or suffer from tension headaches. The gentle pressure helps to alleviate tightness 
             in the neck muscles, promoting relaxation and potentially easing headache symptoms.

            </p>
          </div>
        </div>

        

        <ScrollRestoration />
      </div>
    </>

  );
};

export default neck;