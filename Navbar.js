import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Ninestars Logo-Big_Grey 5.png';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg  ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{backgroundColor:"white"}}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Aotm" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#designers"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services"></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link login-link" href="#login">Log in</a>
            </li> */}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;