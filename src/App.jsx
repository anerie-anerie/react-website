// import all items from each file
import React from "react";
import "./app.scss"

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/skills"

//split into sections and order everything

function App() {
  return (
      <div className="app">
        <Topbar/>
        
      <div className ="sections">

        <Intro/>
        <Skills/>
        <Portfolio/>     

      </div>
        
      </div> 
  );
}

export default App;
