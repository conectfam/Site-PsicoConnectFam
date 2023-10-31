// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const Menu = () => (
    <ul className={isMobile ? "mobile" : "desktop"}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tecnologia">Tecnologia</Link></li>
      <li><Link to="/contato">Fale Conosco</Link></li>
      <li><Link to="/a-qualityseg">A Connect Fam</Link></li>
    </ul>
  );

  return (
    <header className="header">
      {isMobile ? (
        <nav>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
            <span>MENU</span>
          </button>
          {isOpen && <Menu />}
        </nav>
      ) : (
        <nav>
          <Menu />
        </nav>
      )}
    </header>
  );
};

export default Header;
