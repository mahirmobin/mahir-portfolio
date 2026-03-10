import Cursor from './Cursor';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page fade-in-page">
      <Nav setCurrentPage={setCurrentPage} />
      <Hero />
      <About />
      <Work />
      <Experience setCurrentPage={setCurrentPage} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
