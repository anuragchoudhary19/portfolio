import React, { useRef, useEffect } from 'react';
import Flashkart from '../images/flashkart.png';
import Circle from '../images/circle.png';
import Messenger from '../images/messenger.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Projects.module.css';
const Projects = () => {
  const projects = useRef();
  useEffect(() => {
    const options = { root: null, threshold: 0.25, rootMargin: '-50px' };
    const observer = new IntersectionObserver(animateProjects, options);
    function animateProjects(entries, observer) {
      entries.forEach((entry) => {
        let heading = document.getElementById('projects-heading');
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.visibility = 'visible';
          heading.style.transform = 'translateY(0)';
          heading.style.transitionDelay = '0ms';
          document.getElementById('card1').style.transform = 'translateY(0)';
          document.getElementById('card1').style.opacity = '1';
          document.getElementById('card1').style.visibility = 'visible';
          document.getElementById('card2').style.transform = 'translateY(0)';
          document.getElementById('card2').style.opacity = '1';
          document.getElementById('card2').style.visibility = 'visible';
          document.getElementById('card3').style.transform = 'translateY(0)';
          document.getElementById('card3').style.opacity = '1';
          document.getElementById('card3').style.visibility = 'visible';
        }
      });
    }
    if (projects.current) {
      observer.observe(projects.current);
    }
  }, []);
  return (
    <div className={styles.project} id='projects'>
      <div className={styles.section}>
        <h2 id='projects-heading'>Projects</h2>
        <div ref={projects} className={styles.projectCards}>
          <div className={`${styles.card} ${styles.flashkart}`} id='card1'>
            <div className={styles.images}>
              <h4>Mobile Store</h4>
              <img src={Flashkart} alt='flashkart' />
            </div>
            <div className={styles.info}>
              <h4>Mobile Store</h4>
              <p>
                A complete platform for buying as well as selling a mobile phone, which has functionality for both users
                as well as the owner of the store.
              </p>
              <ul>
                <li>Firebase Authenctication/Authorization </li>
                <li>Login Using Google</li>
                <li>Star Rating System</li>
                <li>Ability to add to Wishlist</li>
                <li>Search and Filter functionality</li>
                <li>Payment using Stripes</li>
                <li>And much more...</li>
              </ul>
              <span>ReactJS, Redux,Firebase, Node.js, MongoDB, Stripe, etc.</span>
              <div className={styles.links}>
                <a href='https://github.com/anuragchoudhary19/flashkart-ecom' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> Client
                </a>
                <a
                  href='https://github.com/anuragchoudhary19/flashkart-ecom-api'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> Sever
                </a>
                <a href='https://flashkart-ecom.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Site
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.circle}`} id='card2'>
            <div className={styles.info}>
              <h4>Twitter Clone</h4>
              <p>An attempt to recreate one of the biggest social media platforms, with many of its features.</p>
              <ul>
                <li>JWT Authenctication/Authorization </li>
                <li>User can create posts.</li>
                <li>They can comment, retweet, like a post.</li>
                <li>Users have the ability to upload their profile picture.</li>
                <li>Follow and get followed by other users.</li>
                <li>Search users.</li>
                <li>And much more...</li>
              </ul>
              <span>ReactJS, Node.js, MongoDB, JWT, etc.</span>
              <div className={styles.links}>
                <a
                  href='https://github.com/anuragchoudhary19/circle-social-media'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> Client
                </a>
                <a
                  href='https://github.com/anuragchoudhary19/circle-social-media-api'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> Sever
                </a>
                <a href='https://circle-social-media.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Site
                </a>
              </div>
            </div>
            <div className={styles.images}>
              <h4>Twitter Clone</h4>
              <img src={Circle} alt='circle' />
            </div>
          </div>
          <div className={`${styles.card} ${styles.chat}`} id='card3'>
            <div className={styles.images}>
              <h4>Chat App</h4>
              <img src={Messenger} alt='circle' />
            </div>
            <div className={styles.info}>
              <h4>Chat App</h4>
              <p>A chat app where users can send each other messages in real-time.</p>
              <ul>
                <li>JWT Authenctication/Authorization </li>
                <li>User can create posts.</li>
                <li>They can comment, retweet, like a post.</li>
                <li>Users have the ability to upload their profile picture.</li>
                <li>Follow and get followed by other users.</li>
                <li>Search users.</li>
                <li>And much more...</li>
              </ul>
              <span>ReactJS, Node.js, MongoDB, JWT, etc.</span>
              <div className={styles.links}>
                <a href='https://github.com/anuragchoudhary19/messenger' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faGithub} />
                  Github
                </a>
                <a href='https://messenger-app-314.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
