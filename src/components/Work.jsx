import useReveal from '../hooks/useReveal';
import './Work.css';

const Work = () => {
  useReveal();

  return (
    <section id="work">
      <div className="section-bg" style={{ top: '-1rem', right: '-1rem', fontSize: 'clamp(7rem, 14vw, 14rem)' }}>MM.</div>
      <div className="work-header reveal">
        <h2 className="work-heading">Selected<br /><em>Work</em></h2>
        <span className="work-count">08 Projects</span>
      </div>
      <div className="projects-list">
        <a href="https://main.djnby1hffg8d5.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="project-item reveal">
          <div className="project-num">01</div>
          <div className="project-body">
            <div className="project-title">Fast Fashion Awareness Platform</div>
            <div className="project-desc">React + AWS Amplify website educating on fast fashion's environmental impact via data-driven stories and sustainable alternatives. Built for a hackathon in a team environment.</div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">AWS Amplify</span>
              <span className="project-tag">UI/UX</span>
              <span className="project-tag accent-tag">Hackathon · Team</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://www.figma.com/proto/iI1w7MYV7z3O20MD18EJLg" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.05s' }}>
          <div className="project-num">02</div>
          <div className="project-body">
            <div className="project-title">Terrapoly – SDG Climate Game</div>
            <div className="project-desc">Monopoly-style simulation gamifying UN Sustainable Development Goals with complex game mechanics and a global-impact dashboard. An interactive educational experience.</div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Tailwind CSS</span>
              <span className="project-tag">Figma</span>
              <span className="project-tag accent-tag">Hackathon · Team</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://www.figma.com/proto/8k9FlNPVJ4Nhi53tz08gDg/48?node-id=0-1&t=QxfmQLlpgwFmTWbT-1" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="project-num">03</div>
          <div className="project-body">
            <div className="project-title">Solora – Mental Health App</div>
            <div className="project-desc">High-fidelity Figma prototype focused on empathetic mood tracking and journaling with low-friction wellness interactions. Designed for the Designathon.</div>
            <div className="project-tags">
              <span className="project-tag">Figma</span>
              <span className="project-tag">UX Design</span>
              <span className="project-tag">Prototyping</span>
              <span className="project-tag accent-tag">Designathon · Team</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://mahirmobin.github.io/ar-vr-webpage/" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="project-num">04</div>
          <div className="project-body">
            <div className="project-title">AR/VR Lab Inventory System</div>
            <div className="project-desc">Interactive web inventory tracker for AR/VR lab assets with search and filter features for streamlined equipment management. Built as a personal initiative.</div>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Tailwind CSS</span>
              <span className="project-tag accent-tag">Personal Project</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://online.pubhtml5.com/wudaw/kayr/" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="project-num">05</div>
          <div className="project-body">
            <div className="project-title">College Magazine</div>
            <div className="project-desc">Collaborated as part of the core design team to layout and visually theme an interactive digital college magazine, showcasing student experiences and artwork through an engaging flippable format.</div>
            <div className="project-tags">
              <span className="project-tag">Publication</span>
              <span className="project-tag">Layout Design</span>
              <span className="project-tag accent-tag">Team</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://github.com/mahirmobin/BookVentures" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.25s' }}>
          <div className="project-num">06</div>
          <div className="project-body">
            <div className="project-title">BookVentures</div>
            <div className="project-desc">A robust Python and MySQL application enabling managers to handle bookstore inventory and customers to order available titles with automated notifications for sold-out books.</div>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">MySQL</span>
              <span className="project-tag accent-tag">Application</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://github.com/mahirmobin/watering_system" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="project-num">07</div>
          <div className="project-body">
            <div className="project-title">Autonomous Plant Watering System</div>
            <div className="project-desc">A hardware-interfaced system designed to autonomously monitor soil moisture and dynamically dispense water as needed to maintain optimal plant health.</div>
            <div className="project-tags">
              <span className="project-tag">Hardware Integration</span>
              <span className="project-tag">Sensors</span>
              <span className="project-tag accent-tag">Automation</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>

        <a href="https://mahirmobin.github.io/Impossible-button-game/" target="_blank" rel="noopener noreferrer" className="project-item reveal" style={{ transitionDelay: '0.35s' }}>
          <div className="project-num">08</div>
          <div className="project-body">
            <div className="project-title">Impossible Button Game</div>
            <div className="project-desc">A highly interactive, frustratingly fun micro-game built entirely with CSS logic, challenging users to click a button that natively evades the cursor.</div>
            <div className="project-tags">
              <span className="project-tag">HTML5</span>
              <span className="project-tag">CSS Animation</span>
              <span className="project-tag accent-tag">Interactive</span>
            </div>
          </div>
          <div className="project-arrow">→</div>
        </a>
      </div>
    </section>
  );
};

export default Work;
