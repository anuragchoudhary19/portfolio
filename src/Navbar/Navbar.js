import React, { useRef, useState, useEffect } from 'react';
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
    const nav = document.getElementById('navH');
    let delay = 100;
    nav.childNodes.forEach((child) => {
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
      child.style.transitionDelay = delay + 'ms';
      delay = delay + 100;
    });
  }, []);
  return (
    <div ref={navbar} className={styles.navbar}>
      <nav>
        <div className={styles.logo} onClick={() => scrollToAnElement('intro')}>
          A
        </div>
        <div className={styles.navH}>
          <ul id='navH'>
            <li onClick={() => scrollToAnElement('about')}>ABOUT</li>
            <li onClick={() => scrollToAnElement('skills')}>SKILLS</li>
            <li onClick={() => scrollToAnElement('projects')}>PROJECTS</li>
            <a href={resume} download rel='noopener noreferrer' target='_blank' className={styles.resume}>
              RESUME
            </a>
          </ul>
        </div>
        <div className={styles.navV} onClick={() => setShowDropdown(!showDropdown)}>
          <div>
            <svg width='2rem' height='2rem'>
              <line x1='0' y1='10%' x2='100%' y2='10%' style={{ stroke: 'var(--green)', strokeWidth: '6' }} />
              <line x1='0' y1='50%' x2='100%' y2='50%' style={{ stroke: 'var(--green)', strokeWidth: '6' }} />
              <line x1='0' y1='90%' x2='100%' y2='90%' style={{ stroke: 'var(--green)', strokeWidth: '6' }} />
            </svg>
          </div>
          <div
            className={styles.backdrop}
            style={{ transform: showDropdown ? 'translateX(0)' : 'translateX(150vw)' }}></div>
          <ul style={{ transform: showDropdown ? 'translateX(0)' : 'translateX(150vw)' }}>
            <li className={styles.close} onClick={() => setShowDropdown(!showDropdown)}>
              <svg width='2rem' height='2rem'>
                <line x1='0' y1='0' x2='100%' y2='100%' style={{ stroke: 'var(--green)', strokeWidth: '6' }} />
                <line x1='0' y1='100%' x2='100%' y2='0' style={{ stroke: 'var(--green)', strokeWidth: '6' }} />
              </svg>
            </li>
            <li onClick={() => scrollToAnElement('about')}>ABOUT</li>
            <li onClick={() => scrollToAnElement('skills')}>SKILLS</li>
            <li onClick={() => scrollToAnElement('projects')}>PROJECTS</li>
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
