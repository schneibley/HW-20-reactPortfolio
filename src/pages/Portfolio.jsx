import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import './css/portfolio.css';

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <div className="portfolio-grid">
      <ProjectCard 
        title="Project 1" 
        image="/path/to/image1.jpg" 
        deployedUrl="https://project1.com"
        githubUrl="https://github.com/your-repo/project1"
      />
      {/* Add more ProjectCard components here for other projects */}
    </div>
  </section>
);

export default Portfolio;