import React, { useState } from "react";
import "../styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (page) => {
    handlePageChange(page);
    setIsMenuOpen(false); // This should close the menu
  };
  
  return (
    <div className="nav-container">
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`nav nav-tabs ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handleLinkClick('About Me')}
            className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleLinkClick("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleLinkClick("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
