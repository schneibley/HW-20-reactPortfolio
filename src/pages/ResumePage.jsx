import './css/resume.css';

const ResumePage = () => (
    <section>
      <h2>Resume</h2>
      
      <h3>Proficiencies:</h3>
      <ul>
        <li>JavaScript</li>
        <li>CSS/HTML</li>
        <li>Node.js</li>
        <li>express</li>
        <li>Postgresql</li>
        <li>MongoDB/mongoose</li>
        <li>React</li>
        <li>  . . .more to come</li>
        {/* Add more proficiencies */}
      </ul>

      <a href="/Resume.pdf" download id="resume-link">Download My Resume</a>
      
    </section>
  );
  
  export default ResumePage;