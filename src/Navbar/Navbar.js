import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import resume from '../resume.pdf';
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navbar = useRef();
  const scrollToAnElement = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };
  useEffect(() => {
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo');
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
    if (document.getElementById('menu')) {
      const menu = document.getElementById('menu');
      menu.style.opacity = '1';
      menu.style.transform = 'translateY(0)';
      menu.style.transitionDelay = '200ms';
    }
    let delay = 200;
    nav.childNodes.forEach((child) => {
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
      child.style.transitionDelay = delay + 'ms';
      delay = delay + 100;
    });
  }, []);

  return (
    <div ref={navbar} className={styles.navbar} id='navbar'>
      <nav>
        <div id='logo' className={styles.logo} onClick={() => scrollToAnElement('intro')}>
          A
        </div>
        <div className={styles.navH}>
          <ul id='nav'>
            <li onClick={() => scrollToAnElement('about')}>
              <span>ABOUT</span>
            </li>
            <li onClick={() => scrollToAnElement('skills')}>
              <span>SKILLS</span>
            </li>
            <li onClick={() => scrollToAnElement('projects')}>
              <span>PROJECTS</span>
            </li>
            <li onClick={() => scrollToAnElement('contact')}>
              <span>CONTACT</span>
            </li>
            <li>
              <a href={resume} download rel='noopener noreferrer' target='_blank' className={styles.resume}>
                RESUME
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.navV} onClick={() => setShowDropdown(!showDropdown)}>
          <div
            className={styles.backdrop}
            style={{
              zIndex: showDropdown ? '101' : '-101',
              opacity: showDropdown ? '1' : '0',
            }}></div>
          <div id='menu' className={styles.menu}>
            <FontAwesomeIcon icon={faBars} size='2x' color='var(--green)' />
          </div>
          <ul
            style={{
              transform: showDropdown ? 'translateX(0)' : 'translateX(150vw)',
              opacity: showDropdown ? '1' : '0',
            }}>
            <li className={styles.close} onClick={() => setShowDropdown(!showDropdown)}>
              <FontAwesomeIcon icon={faTimes} size='2x' color='var(--green)' />
            </li>
            <li onClick={() => scrollToAnElement('about')}>ABOUT</li>
            <li onClick={() => scrollToAnElement('skills')}>SKILLS</li>
            <li onClick={() => scrollToAnElement('projects')}>PROJECTS</li>
            <li onClick={() => scrollToAnElement('contact')}>CONTACT</li>
            <a href={resume} download rel='noopener noreferrer' target='_blank' className={styles.resume}>
              RESUME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
