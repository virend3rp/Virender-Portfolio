import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
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
      </div>
    </nav>
  );
}
