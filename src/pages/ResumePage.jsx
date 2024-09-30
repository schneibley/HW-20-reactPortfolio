import './css/resume.css';

const ResumePage = () => (
    <section>
      <h2>Resume</h2>
      
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS/HTML</li>
        {/* Add more proficiencies */}
      </ul>

      <a href="/path/to/resume.pdf" download id="resume-link">Download My Resume</a>
      
    </section>
  );
  
  export default ResumePage;