import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Introduction.module.css';

const Introduction = () => {
  useEffect(() => {
    let intro = document.getElementById('intro');
    intro.childNodes.forEach((child) => {
      child.style.opacity = '1';
      child.style.visibility = 'visible';
      child.style.transform = 'translateY(0)';
    });
  }, []);
  return (
    <div className={styles.intro}>
      <div className={styles.section} id='intro'>
        <h3 style={{ color: 'var(--green)', transitionDelay: '400ms' }}>Hi, my name is</h3>
        <h2 style={{ color: 'var(--white)', transitionDelay: '500ms' }}>Anurag Choudhary</h2>
        <h3 style={{ color: 'var(--green)', transitionDelay: '600ms' }}>and</h3>
        <h2 style={{ color: 'var(--dark-white)', transitionDelay: '700ms' }}>I turn ideas into a reality.</h2>
        <br />
        <h3 style={{ color: 'var(--dark-white)', transitionDelay: '800ms' }}>FullStack Developer using MERN Stack.</h3>
      </div>
      <div className={styles.links}>
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
        <a href='https://twitter.com/anurag_7011' rel='noopener noreferrer' target='_blank' className={styles.twitter}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
