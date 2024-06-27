import React from "react";
import Navbar from "./components/Navbar/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import './App.css';

function App() {
  return (
    <Router>
      <div className="background">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
