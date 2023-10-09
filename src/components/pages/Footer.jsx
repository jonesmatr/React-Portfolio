import React from 'react';
import '../../styles/Footer.css'; // Importing Footer.css

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/developer" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>  {/* GitHub Icon */}
      </a>
      <a href="https://linkedin.com/in/developer" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>  {/* LinkedIn Icon */}
      </a>
      <a href="https://stackoverflow.com/users/developer" target="_blank" rel="noreferrer">
        <i className="fab fa-stack-overflow"></i>  {/* Stack Overflow Icon */}
      </a>
    </footer>
  );
};

export default Footer;

