import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/facilities', label: 'Instalaciones' },
    { path: '/habitaciones', label: 'Habitaciones' },
    { path: '/contactanos', label: 'Contactanos' },
  ];

  const handleClose = () => setIsMobileOpen(false);

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Hotel Miami logo" />
        </div>

        <nav className="nav-desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="toggle-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          &#9776;
        </button>
      </div>

      <nav className={`nav-mobile ${isMobileOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={pathname === link.path ? 'active' : ''}
                onClick={handleClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
