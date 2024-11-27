// pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
//MUST IMPORT STYLING!
import "../app.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Anerie's magical portfolio!</h1>
      <div className="button-container">
        <button onClick={() => navigate("/About")}>qui suis-je?</button>
        <button onClick={() => navigate("/projects")}>Check out my super cool projects</button>
        <button onClick={() => navigate("/contact")}>Call me anytime</button>
        
      </div>
    </div>
  );
}

export default Home;
