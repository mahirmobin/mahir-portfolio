import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Nav from './Nav';
import Footer from './Footer';
import './Freelance.css';

const freelanceProjects = [
  {
    title: "Brochure of Capsules (Maigreens)",
    imgUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808/9f1744240603247.69421e0254e4c.png",
    fullImgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ed2b13240603247.69421db63f57a.png"
  },
  {
    title: "Pachi La Cocina Design",
    imgUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808/d9e8f2239698711.692f019530500.png",
    fullImgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/73189b239698711.692f01959dd26.jpg"
  }
];

const Freelance = ({ setCurrentPage }) => {
  useReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.classList.add('fade-in');
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);

  return (
    <div className="freelance-page">
      <Nav setCurrentPage={setCurrentPage} />
      
      <section className="freelance-hero">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <div className="section-label">Freelance UI/UX & Branding</div>
        <h1 className="freelance-heading">
          Crafting identities for<br />
          <em>hospitality.</em>
        </h1>
        <p className="freelance-desc">
          A showcase of my branding, packaging, and menu design work for various independent clients.
        </p>
      </section>

      <section className="freelance-tree-container">
        <div className="section-label">Selected Works</div>
        
        <div className="freelance-tree">
          <div className="tree-line"></div>
          
          {freelanceProjects.map((proj, idx) => (
            <div key={idx} className={`tree-node ${idx % 2 === 0 ? 'left' : 'right'} reveal`} style={{ transitionDelay: `${0.1 * idx}s` }}>
              <div className="tree-dot"></div>
              <div className="tree-content">
                <div className="gallery-img-wrapper" onClick={() => setSelectedImage(proj.fullImgUrl)} style={{ cursor: 'zoom-in' }}>
                  <img src={proj.imgUrl} alt={proj.title} className="gallery-image blend-image" />
                </div>
                <div className="gallery-caption">{proj.title}</div>
              </div>
            </div>
          ))}

        </div>
      </section>
      
      <Footer />
      
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>×</button>
          <img src={selectedImage} alt="Fullscreen design" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Freelance;
