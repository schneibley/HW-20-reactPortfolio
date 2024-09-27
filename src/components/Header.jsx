import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bradley Schneider's Portfolio</h1>
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
    </nav>
  </header>
);

export default Header;