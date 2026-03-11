import useReveal from '../hooks/useReveal';
import './Experience.css';

const Experience = ({ setCurrentPage }) => {
  useReveal();

  return (
    <section id="experience">
      <div className="section-bg" style={{ bottom: '-1rem', right: '-2rem', fontSize: 'clamp(6rem, 12vw, 12rem)', transform: 'rotate(-5deg)' }}>MMM</div>
      <div className="about-left">
        <div className="section-label">Experience</div>
        <h2 className="exp-heading reveal">Where I've<br />put in the <em>work.</em></h2>
      </div>
      <div className="exp-list reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="exp-item interactive-exp" onClick={() => setCurrentPage?.('internships')} style={{ cursor: 'pointer' }}>
          <div className="exp-period">May – Jun 2025</div>
          <div>
            <div className="exp-role" style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--soft)' }}>
              Multimedia Design Intern ↗
            </div>
            <div className="exp-org">Unilife Dairy Products LLP</div>
            <div className="exp-detail">Designed print-ready packaging for Kreamers and Unicone product lines, currently on retail shelves across Kerala. Click to view project details.</div>
          </div>
        </div>
        <div className="exp-item interactive-exp" onClick={() => setCurrentPage?.('freelance')} style={{ cursor: 'pointer' }}>
          <div className="exp-period">Jan 2024 – Present</div>
          <div>
            <div className="exp-role" style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--soft)' }}>
              Freelance UI/UX & Branding Designer ↗
            </div>
            <div className="exp-org">Remote</div>
            <div className="exp-detail">Branding kits and menus for 4+ hospitality clients across various verticals and brand identities. Click to view project details.</div>
          </div>
        </div>
        <div className="exp-item">
          <div className="exp-period">Aug 2025 – Present</div>
          <div>
            <div className="exp-role">Design Co-Lead</div>
            <div className="exp-org">ACM FISAT</div>
            <div className="exp-detail">Mentoring 5+ juniors and directing visual identity for national-level events at FISAT, Kerala.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
