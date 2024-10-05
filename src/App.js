import { logDOM } from "@testing-library/react";
import "./App.css";
import logo from "./stretch-logo.png";
import Bodymap from "./bodymap.js";
import Diagnosis from "./diagnosis.js";
import stretchImage from "./newstretch.jpg"
import { ScrollRestoration } from "react-router-dom";
import downarrow from "./downarrow.png";
import Arrow from "./Arrow.png"; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <title>JointPal.ai</title>
        <button className="Sign-up-button"> Sign up </button>
        <button className="Log-in-button"> Log in </button>
      </header>
      <div className="inspo-header">
      <div className="inspo-text">
        <h2>personalized stretching guidance</h2>
        <h3>at your fingertips.</h3>
      </div>
      <div className="inspo-image">
        <img src={stretchImage} alt="Stretch-Image"></img>
      </div>
      </div>
      
      <img className="down-arrow" src={downarrow}></img>

      <div className="App-diagram">
        {/* <img src={Arrow} alt="Stretch-Image"/> */}
        
        <Bodymap />
        <Diagnosis />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default App;
