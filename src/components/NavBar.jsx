import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import cartoonYou from "/virender-looking.png";

const deadpoolQuotes = {
  about: [
    "So, you wanna know me? That's cute.",
    "Only if you don’t tell the detective.",
    "I was bitten by a radioactive keyboard.",
    "This section is under surveillance by Nick Fury."
  ],
  projects: [
    "Only if you promise not to steal the source code.",
    "These are my digital children. Handle with care.",
    "Warning: May contain traces of genius.",
    "Look, but don’t touch the Git."
  ],
  skills: [
    "These skills are 100% gluten-free.",
    "Certified in coffee-fueled debugging.",
    "Endorsed by Tony Stark (in my dreams).",
    "Don't try this at home... or do."
  ],
  contact: [
    "Slide into my inbox like it’s the DMs.",
    "I don’t bite… unless you write bad code.",
    "This is your cue to say hi 👋",
    "You rang, hooman?"
  ]
};

export default function NavBar() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [popOutStyle, setPopOutStyle] = useState({});
  const [animationKey, setAnimationKey] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname.slice(1); // 'skills', 'about', etc.

  const handleHover = (id) => {
    setHoveredNav(id);
    const side = Math.random() < 0.5 ? "left" : "right";
    const top = Math.floor(Math.random() * 70) + 10;
    const alignStyle = {
      top: `${top}%`,
      [side]: "0",
      animation: `flipInFrom${side === "left" ? "Left" : "Right"} 1s ease`
    };
    setPopOutStyle(alignStyle);
    setAnimationKey(prev => prev + 1);
  };

  const handleLeave = () => {
    setHoveredNav(null);
  };

  const getRandomQuote = (key) => {
    const quotes = deadpoolQuotes[key];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <div className="logo-text">
          Virender
          <br />
          Parasariya
        </div>
        <div className="logo-icon">
          <img src="/the-office.png" alt="Office Icon" />
        </div>
     </Link>


      <div className="nav-links">
        {["about", "projects", "skills", "contact"].map((id) => (
          <Link
            key={id}
            to={`/${id}`}
            className={`nav-link ${currentPath === id ? "active-nav" : ""}`}
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={handleLeave}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </div>

      {hoveredNav && (
        <div
          key={animationKey}
          className="cartoon-popup"
          style={popOutStyle}
        >
          <img src={cartoonYou} alt="Cartoon You" className="cartoon-img" />
          <div className="speech-bubble">{getRandomQuote(hoveredNav)}</div>
        </div>
      )}
    </nav>
  );
}
