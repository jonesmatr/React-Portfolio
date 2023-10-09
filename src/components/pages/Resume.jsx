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
      <a href="resume.pdf" download>Download Resume</a>
      
      <h2>Front-end Proficiencies</h2>
      <ul>
        {frontEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        {backEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;

