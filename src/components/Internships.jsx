import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Nav from './Nav'; // Note: Nav would need conditional logic if we want to show it here, or we can just make a custom back button.
import Footer from './Footer';
import kreamersImage from '../assets/kreamers-3d.jpg';
import unilifeFlavorImage from '../assets/1000088388.png';
import './Internships.css';

const behanceProjects = [
  {
    title: "Unilife Packaging Design",
    imgUrl: "https://mir-s3-cdn-cf.behance.net/projects/max_808/aad01f239698477.692f00ce458cd.png",
    fullImgUrl: "https://mir-cdn.behance.net/v1/rendition/project_modules/fs_webp/b0b7b3239698477.692f00cebd8ac.jpg"
  },
  {
    title: "Unilife Packaging Design (Flavor Variant)",
    imgUrl: unilifeFlavorImage,
    fullImgUrl: unilifeFlavorImage,
    note: "* Note: This is just one of the flavors. All of them cannot be shown here."
  }
];

const Internships = ({ setCurrentPage }) => {
  useReveal();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Add a simple fade-in class on mount for smooth transitions
    document.body.classList.add('fade-in');
    return () => document.body.classList.remove('fade-in');
  }, []);

  return (
    <div className="internships-page fade-in-page">
      <nav className="internships-nav">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} 
          className="back-btn"
        >
          ← Back to Home
        </a>
      </nav>
      
      <section className="internships-hero">
        <div className="section-label">Internship Work</div>
        <h1 className="internships-heading">
          Multimedia Design <br /><em>Intern</em>
        </h1>
        <p className="internships-desc">
          Unilife Dairy Products LLP (May – Jun 2026). Designed print-ready packaging for Kreamers and Unicone product lines, currently on retail shelves across Kerala.
        </p>
      </section>

      <section className="internships-tree-container">
        <div className="section-label">Selected Works</div>
        
        <div className="internships-tree">
          <div className="tree-line"></div>
          
          {/* Node 1: 3D Model Render (Left Side) */}
          <div className="tree-node left reveal">
            <div className="tree-dot"></div>
            <div className="tree-content">
              <div className="gallery-img-wrapper" onClick={() => setSelectedImage(kreamersImage)} style={{ cursor: 'zoom-in' }}>
                <img src={kreamersImage} alt="Kreamers Ice Cream 3D Model" className="gallery-image blend-image" />
              </div>
              <div className="gallery-caption">3D Product Render - Kreamers Ice Cream Freezer</div>
            </div>
          </div>

          {/* Node 2 & 3: Behance Packaging Designs */}
          {behanceProjects.map((proj, idx) => (
            <div key={idx} className={`tree-node ${idx % 2 === 0 ? 'right' : 'left'} reveal`} style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}>
              <div className="tree-dot"></div>
              <div className="tree-content">
                <div className="gallery-img-wrapper" onClick={() => setSelectedImage(proj.fullImgUrl)} style={{ cursor: 'zoom-in' }}>
                  <img src={proj.imgUrl} alt={proj.title} className="gallery-image blend-image" />
                </div>
                <div className="gallery-caption">
                  {proj.title}
                  {proj.note && <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>{proj.note}</div>}
                </div>
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

export default Internships;
