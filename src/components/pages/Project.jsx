import React from 'react';
import '../../styles/Project.css';
import githubLogo from '../../assets/github-logo.png'; 

const Project = ({ title, image, deployed, github, description }) => {
  return (
    <div className="project-card">
      <div className="hover-effect">
        <a href={deployed} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="github-logo" />
        </a>
        <p>{description}</p> 
      </div>
      <img src={image} alt={title} className="project-image" />
    </div>
  );
};

export default Project;
