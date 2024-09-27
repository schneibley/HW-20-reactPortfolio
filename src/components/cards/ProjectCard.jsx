import React from 'react';
import '../../pages/css/projectcard.css';

function ProjectCard({ title, image, description, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default ProjectCard;