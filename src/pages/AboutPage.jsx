import './css/about.css';

function AboutPage() {
  return (
    <div className="about">
      <img className="about-image" src="/DSC01586.jpg" alt="Your Name" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I have spent most of my adult life dedicating my time to practicing Brazilian Jiu-Jitsu, both as a competitor and as a teacher. As a competitor, I have achieved a high level of success, competing amongst the best in the world. Some of my main accomplishments include:
        </p>
        <ul>
          <li>Pan-American Champion (No-Gi/Brown Belt/Adult)</li>
          <li>MWF 185lb Champion</li>
          <li>Grapplefest Veteran</li>
          <li>F2W Brown Belt Open Weight Champion</li>
        </ul>
        <p>
          On top of competing, I have been teaching BJJ for over seven years, and I feel like teaching in any form helps promote critical thinking. With my age creeping up, and my window to compete coming to a close, I'm looking to add a new outlet to my creativity, and that has been coding. I enrolled in Ohio State's Full-Stack Ed-X program and have steadily picked up skills, catching a glimpse of the depth that coding has to offer. As I exit this bootcamp, I am excited to continue learning and building my base of knowledge in the world of coding!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;