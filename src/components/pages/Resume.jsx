import React from 'react';
import '../../styles/Resume.css';

const Resume = () => {
  const frontEndProficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'JQuery',
    'Responsive Design',
    'React',
    'Bootstrap',
  ];

  const backEndProficiencies = [
    'APIs',
    'Node',
    'Express',
    'MySQL/Sequelize',
    'MongoDB/Mongoose',
    'REST',
    'GraphQL',
  ];

  return (
    <section id="resume">
      <h2 className="resume-header">Resume</h2>
      <a href="resume.pdf" download className="download-link">
        Download Resume <i className="fas fa-download"></i>
      </a>
      
      <h4 className="proficiency-header">Front-end Proficiencies</h4>
      <ul>
        {frontEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h4>Back-end Proficiencies</h4>
      <ul>
        {backEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;

