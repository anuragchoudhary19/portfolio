import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Introduction.module.css';

const Introduction = () => {
  useEffect(() => {
    let intro = document.getElementById('intro');
    let links = document.getElementById('links');
    const options = { root: null, threshold: 0.25, rootMargin: '-150px 0px -150px 0px' };
    const observer = new IntersectionObserver(observe, options);
    function observe(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let delay = 700;
          intro.childNodes.forEach((child) => {
            fadeIn(child, delay);
            delay = delay + 100;
          });
          delay = delay + 200;
          links.childNodes.forEach((child) => {
            fadeIn(child, delay);
            delay = delay + 100;
          });
        }
      });
    }
    function fadeIn(element, delay) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transitionDelay = delay + 'ms';
    }
    observer.observe(intro);
  }, []);
  return (
    <div className={styles.intro}>
      <div className={styles.section} id='intro'>
        <h3 style={{ color: 'var(--green)' }}>Hi, my name is</h3>
        <h2 style={{ color: 'var(--white)' }}>Anurag Choudhary</h2>
        <h3 style={{ color: 'var(--green)' }}>and</h3>
        <h2 style={{ color: 'var(--dark-white)' }}>I turn ideas into a reality.</h2>
        <h3 style={{ color: 'var(--dark-white)' }}>FullStack Developer using MERN Stack.</h3>
      </div>
      <div className={styles.links} id='links'>
        <a
          href='https://github.com/anuragchoudhary19'
          rel='noopener noreferrer'
          target='_blank'
          className={styles.github}>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a
          href='https://www.linkedin.com/in/anurag-choudhary-462913164/'
          rel='noopener noreferrer'
          target='_blank'
          className={styles.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </a>
        <a href='https://twitter.com/Anurag1035' rel='noopener noreferrer' target='_blank' className={styles.twitter}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
