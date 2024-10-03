import ProjectCard from '../components/cards/ProjectCard';
import './css/portfolio.css';

const Portfolio = () => (
  <section>
    <h2>My Projects</h2>
    <div className="portfolio-grid">
      <ProjectCard 
        title="Parks and Respiration" 
        image="/parksnresp.png" 
        description="A project focused on tracking air quality in parks"
        deployedUrl="https://anewbil.github.io/Parks-and-respiration/"
        githubUrl="https://github.com/anewbil/Parks-and-respiration"
      />
      <ProjectCard 
        title="Pet-tracker" 
        image="/pettracker.png" 
        description="Pet tracker to monitor animals and their details."
        deployedUrl="https://pet-tracker-hldv.onrender.com"
        githubUrl="https://github.com/MatthewWilliamsCMH/pet-tracker"
      />
            <ProjectCard 
        title="JATE-text editor" 
        image="/JATE.png" 
        description="A text editor demonstrating PWA capabilities"
        deployedUrl="https://hw19-texteditor-pwa.onrender.com"
        githubUrl="https://github.com/schneibley/HW19-TextEditor-PWA"
      />
            <ProjectCard 
        title="First coding assignment" 
        image="/SEO.png" 
        description="Adjusted the HTML to improve SEO"
        deployedUrl="https://schneibley.github.io/homework-01/"
        githubUrl="https://github.com/schneibley/homework-01"
      />
            <ProjectCard 
        title="first portfolio" 
        image="/ugly.png" 
        description="A look into how far my coding has come in a short time."
        deployedUrl="https://schneibley.github.io/homework-02-portfolio/"
        githubUrl="https://github.com/schneibley/homework-02-portfolio"
      />
                  <ProjectCard 
        title="5-day forecast" 
        image="/weather.png" 
        description="Using Rest APIs to create a 5-day forecast"
        deployedUrl="https://schneibley.github.io/homework-06-5-day-weather-/"
        githubUrl="https://github.com/schneibley/homework-06-5-day-weather-"
      />
    </div>
  </section>
);

export default Portfolio;