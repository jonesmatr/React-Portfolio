import React from 'react';
import Project from './Project';
import '../../styles/Portfolio.css';
import mealPlanner from '../../assets/Meal-Planner.jpg';
import textEditor from '../../assets/Text-Editor.png';
import techBlog from '../../assets/tech-blog.jpg';
import noteTaker from '../../assets/note-taker.jpg';
import weatherDashboard from '../../assets/weather-dashboard.jpg';
import workDayScheduler from '../../assets/work-day-scheduler.jpg';
import vaa from '../../assets/vaa.png';   

const projects = [
  {
    title: 'Meal Planner',
    image: mealPlanner,
    deployed: 'https://meal-planner-08232023-07a30f8d4150.herokuapp.com/',
    github: 'https://github.com/jonesmatr/Meal-Planner.git',
    description: 'MVC App'
  },
  {
    title: 'Text Editor',
    image: textEditor,
    deployed: 'https://text-editor-100123-7b133408c5cd.herokuapp.com/',
    github: 'https://github.com/jonesmatr/Text-Editor.git',
    description: 'PWA App'
  },
  {
    title: 'Tech Blog',
    image: techBlog,
    deployed: 'https://tech-blog-08282023-b51a638c8d74.herokuapp.com/',
    github: 'https://github.com/jonesmatr/Tech-Blog.git',
    description: 'MVC App'
    
  },
  {
    title: 'Note Taker',
    image: noteTaker,
    deployed: 'https://secret-mesa-81373-68f8998a8913.herokuapp.com/',
    github: 'https://github.com/jonesmatr/Note-Taker.git',
    description: 'Express.js'
  },
  {
    title: 'Weather Dashboard',
    image: weatherDashboard,
    deployed: 'https://jonesmatr.github.io/Weather-Dashboard/',
    github: 'https://github.com/jonesmatr/Weather-Dashboard.git',
    description: 'Server-Side API'
  },
  {
    title: 'Work Day Scheduler',
    image: workDayScheduler,
    deployed: 'https://jonesmatr.github.io/Work-Day-Scheduler/',
    github: 'https://github.com/jonesmatr/Work-Day-Scheduler.git',
    description: 'JavaScript/JQuery'
  },
  {
    title: 'Visual Architecture Assistant', 
    image: vaa,
    deployed: 'https://jonesmatr.github.io/Work-Day-Scheduler/',
    github: 'https://github.com/jonesmatr/Work-Day-Scheduler.git',
    description: 'JavaScript/JQuery'
  }
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

