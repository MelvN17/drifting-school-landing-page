import React, { useState, useEffect } from 'react';
import styles from "../1.NavBar/Navbar.module.scss"
import {FaTimes, FaStream } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
  } 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const secondPage = window.innerHeight;
    setIsScrolled(scrollPosition >= secondPage);
  }


  return (
    <nav className={isScrolled ? styles.scrolled : ''}>
      <div className={styles.navbar}>
        <a href="/#" className={styles.logo}><h1>MAX<span>DRIFT</span></h1></a>
        <div className={`${styles["nav_links"]} ${isOpen ? styles.show : ""}`}>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Galleries</a></li>
            <li><a href="/#">FAQ</a></li>
            <li><a href="/#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.nav_toggle} onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaStream />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
