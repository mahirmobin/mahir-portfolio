import useReveal from '../hooks/useReveal';
import './About.css';

const About = () => {
  useReveal();

  return (
    <section id="about">
      <div className="section-bg" style={{ bottom: '-1rem', right: '-1rem', fontSize: 'clamp(6rem, 14vw, 14rem)' }}>MMM</div>
      <div className="about-left">
        <div className="section-label">About</div>
        <h2 className="about-heading reveal">Design that<br />thinks, then <em>speaks.</em></h2>
        <p className="about-text reveal" style={{ transitionDelay: '0.1s' }}>
          2nd-year B.Tech student in Computer Science &amp; Design at FISAT, Kerala — maintaining an 8.85 CGPA. I sit at the intersection of UI/UX design and front-end development, building platforms that feel as considered as they function: from cloud-deployed web applications to retail-ready packaging currently on shelves across Kerala.
        </p>
        <div className="about-stat reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="stat-item">
            <div className="stat-num">8.85<span>/10</span></div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">4<span>+</span></div>
            <div className="stat-label">Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5<span>+</span></div>
            <div className="stat-label">Mentees</div>
          </div>
        </div>
      </div>
      <div className="about-right reveal" style={{ transitionDelay: '0.15s' }}>
        <div className="section-label">Tools & Technologies</div>
        <div className="tools-grid">
          <div className="tool-tag">Figma</div>
          <div className="tool-tag">React</div>
          <div className="tool-tag">Tailwind CSS</div>
          <div className="tool-tag">Adobe Suite</div>
          <div className="tool-tag">JavaScript</div>
          <div className="tool-tag">Java</div>
          <div className="tool-tag">Python</div>
          <div className="tool-tag">C / C++</div>
          <div className="tool-tag">AWS Amplify</div>
          <div className="tool-tag">Framer</div>
        </div>
      </div>
    </section>
  );
};

export default About;
