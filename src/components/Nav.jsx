import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="#" className="nav-logo">MM<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
