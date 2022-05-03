import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a
          href='https://www.linkedin.com/in/anurag-choudhary-462913164/'
          rel='noopener noreferrer'
          target='_blank'
          className={styles.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
        </a>
        <a
          href='https://github.com/anuragchoudhary19'
          rel='noopener noreferrer'
          target='_blank'
          className={styles.github}>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a href='https://twitter.com/anurag_7011' rel='noopener noreferrer' target='_blank' className={styles.twitter}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
      </div>
      <span className={styles.signature}>Created and Designed by Anurag Choudhary</span>
    </div>
  );
};

export default Footer;
