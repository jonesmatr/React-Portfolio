import React from 'react';
import Project from './Project';
import '../../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Project title="Project 1" image="project1.png" deployedLink="#" repoLink="#" />
      {/* Add more Project components here */}
    </section>
  );
};

export default Portfolio;
