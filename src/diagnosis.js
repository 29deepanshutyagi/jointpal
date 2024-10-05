import "./diagnosis.css";
import React, { useState } from "react";
import axios from "axios";

function Diagnosis() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(process.env)

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");
    
    try {
      const requestBody = {
        contents: [{
          parts: [{
            text: `Based on the following symptoms, recommend which area to stretch. Options are elbow, hand, wrist, hip, knee, shoulder, neck, and ankles, if more than two options are tgere provide both words if suppose a user says my neck and lower back hurts then it should give neck as neck is hurting and also hip as lower back is hurting also response should be like based on your symptoms i reccounds streching this. Symptoms: ${text}"`
          }]
        }]
      };

      const apiResponse = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${API_KEY}`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log("Full API Response:", apiResponse.data);
      
      // Set the response text from the API
      if (apiResponse.data && apiResponse.data.candidates && apiResponse.data.candidates[0].content.parts[0].text) {
        setResponse(apiResponse.data.candidates[0].content.parts[0].text);
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(error.response?.data?.error?.message || "Error processing request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Diagnosis">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your symptoms..."
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      {response && (
        <div className="response">
          <p>Recommended Action:</p>
          <p>{response}</p>
          <div className="aroow">
        <span className="arrow-text">Click on the body part to get started.</span>
        </div>
        </div>
      )}
      
    </div>
  );
}

export default Diagnosis;