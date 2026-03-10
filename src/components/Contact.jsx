import useReveal from '../hooks/useReveal';
import './Contact.css';

const Contact = () => {
  useReveal();

  return (
    <section id="contact">
      <div className="section-bg" style={{ top: '-1rem', left: '-1rem', fontSize: 'clamp(6rem, 14vw, 14rem)' }}>MM.</div>
      <div className="contact-bg">Hello.</div>
      <div className="contact-inner">
        <div className="section-label">Contact</div>
        <h2 className="contact-heading reveal">
          Let's <em>build</em><br />something.
        </h2>
        <a href="mailto:mahirmobin@gmail.com" className="contact-email reveal" style={{ transitionDelay: '0.1s' }}>
          mahirmobin@gmail.com
        </a>
        <div className="contact-meta reveal" style={{ transitionDelay: '0.15s' }}>
          +91 735 6782 533 · Kerala, India
        </div>
        <div className="social-links reveal" style={{ transitionDelay: '0.2s' }}>
          <a href="http://www.linkedin.com/in/mahirmobin" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="http://behance.net/mahirmobin" target="_blank" rel="noopener noreferrer" className="social-link">Behance</a>
          <a href="http://github.com/mahirmobin" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
