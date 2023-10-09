import React from 'react';
import '../../styles/Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <a href="resume.pdf" download>Download Resume</a>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
