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
    let heading = document.getElementById('projects-heading');
    const project1 = document.getElementById('project1');
    const project2 = document.getElementById('project2');
    const project3 = document.getElementById('project3');
    const options = { root: null, threshold: 0.25, rootMargin: '-50px' };
    const observer1 = new IntersectionObserver(animate, options);
    const observer2 = new IntersectionObserver(animate, options);
    const observer3 = new IntersectionObserver(animate, options);
    function animate(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          heading.style.opacity = '1';
          heading.style.transitionDelay = '100ms';
          let element = document.getElementById(entry.target.id);
          element.childNodes.forEach((child) => {
            fadeIn(child);
          });
        }
      });
    }
    function fadeIn(element) {
      element.style.transform = 'translateX(0)';
      element.style.opacity = '1';
    }
    observer1.observe(project1);
    observer2.observe(project2);
    observer3.observe(project3);
  }, []);
  return (
    <div className={styles.project} id='projects'>
      <div className={styles.section}>
        <h2 id='projects-heading'>Projects</h2>
        <div ref={projects} className={styles.projectCards}>
          <div className={`${styles.card} ${styles.flashkart}`} id='project1'>
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
                  <FontAwesomeIcon icon={faGithub} /> <span>Client</span>
                </a>
                <a
                  href='https://github.com/anuragchoudhary19/flashkart-ecom-api'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> <span>Server</span>
                </a>
                <a href='https://flashkart-ecom.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span>See Live</span>
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.circle}`} id='project2'>
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
                  <FontAwesomeIcon icon={faGithub} /> <span>Client</span>
                </a>
                <a
                  href='https://github.com/anuragchoudhary19/circle-social-media-api'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} /> <span>Server</span>
                </a>
                <a href='https://circle-social-media.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> <span>See Live</span>
                </a>
              </div>
            </div>
            <div className={styles.images}>
              <h4>Twitter Clone</h4>
              <img src={Circle} alt='circle' />
            </div>
          </div>
          <div className={`${styles.card} ${styles.chat}`} id='project3'>
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
                  <span>Client</span>
                </a>
                <a href='https://messenger-app-314.netlify.app/' rel='noopener noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> <span>See Live</span>
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
