import '../../pages/css/projectcard.css';
import PropTypes from 'prop-types';

function ProjectCard({ title, image, description, deployedUrl, githubUrl }) {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-info">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="project-title">{title}</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="/github-mark.png" alt="GitHub" />
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  deployedUrl: PropTypes.string,
  githubUrl: PropTypes.string
}

export default ProjectCard;