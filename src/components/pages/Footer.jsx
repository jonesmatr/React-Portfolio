import React from 'react';
import '../../styles/Footer.css'; // Importing Footer.css

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/jonesmatr" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>  {/* GitHub Icon */}
      </a>
      <a href="https://www.linkedin.com/in/matthew-r-jones/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>  {/* LinkedIn Icon */}
      </a>
      <a href="https://stackexchange.com/users/12733144/jonesmatr" target="_blank" rel="noreferrer">
        <i className="fab fa-stack-overflow"></i>  {/* Stack Overflow Icon */}
      </a>
    </footer>
  );
};

export default Footer;

