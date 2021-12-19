import React, { useRef, useEffect } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = useRef();
  useEffect(() => {
    const options = { root: null, threshold: 0.25, rootMargin: '-150px' };
    const observer = new IntersectionObserver(animateSkills, options);
    function animateSkills(entries, observer) {
      entries.forEach((entry) => {
        let heading = document.getElementById('skills-heading');
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.visibility = 'visible';
          heading.style.transform = 'translateY(0)';
          heading.style.transitionDelay = '0ms';
          document.getElementById('list2').style.transform = 'translateY(0)';
          document.getElementById('list2').style.opacity = '1';
          document.getElementById('list2').style.visibility = 'visible';
          document.getElementById('list1').style.transform = 'translateY(0)';
          document.getElementById('list3').style.transform = 'translateY(0)';
          document.getElementById('list1').style.opacity = '1';
          document.getElementById('list3').style.opacity = '1';
          document.getElementById('list1').style.visibility = 'visible';
          document.getElementById('list3').style.visibility = 'visible';
        }
      });
    }
    if (skills.current) {
      observer.observe(skills.current);
    }
  }, []);
  return (
    <div className={styles.skills} id='skills'>
      <div className={styles.section}>
        <h2 id='skills-heading'> Tech Skills</h2>
        <div id='skills-content' ref={skills} className={styles.list}>
          <div className={styles.list1} id='list1'>
            <h3>Front-End</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>LESS</li>
            </ul>
          </div>
          <div className={styles.list2} id='list2'>
            <h3>Back-End</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className={styles.list3} id='list3'>
            <h3>Tools</h3>
            <ul>
              <li>Chrome Dev Tools</li>
              <li>VS Code</li>
              <li>Github</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
