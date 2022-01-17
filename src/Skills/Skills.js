import React, { useEffect } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  useEffect(() => {
    const skills = document.getElementById('skills');
    let list1 = document.getElementById('list1');
    let list2 = document.getElementById('list2');
    let list3 = document.getElementById('list3');
    let heading = document.getElementById('skills-heading');
    const options1 = { root: null, threshold: 0.25, rootMargin: '-150px 0px -150px 0px' };
    const options2 = { root: null, threshold: 0.25, rootMargin: '-50px 0px -50px 0px' };
    let observer = null;
    if (window.innerWidth < 769) {
      observer = new IntersectionObserver(animateSkills, options2);
    } else {
      observer = new IntersectionObserver(animateSkills, options1);
    }
    function animateSkills(entries, observer) {
      console.log(observer);
      entries.forEach((entry) => {
        const lists = [list1, list2, list3];
        if (entry.isIntersecting) {
          heading.style.opacity = '1';
          heading.style.visibility = 'visible';
          heading.style.transform = 'translateY(0)';
          heading.style.transitionDelay = '0ms';
          lists.forEach((list) => {
            let delay = 100;
            list.childNodes.forEach((child) => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
              child.style.transitionDelay = delay + 'ms';
              delay = delay + 50;
            });
          });
        }
      });
    }
    observer.observe(skills);
  }, []);
  return (
    <div className={styles.skills} id='skills'>
      <div className={styles.section}>
        <h2 id='skills-heading'> Tech Stacks</h2>
        <div id='skills-content' className={styles.list}>
          <ul className={styles.list1} id='list1'>
            <li>Front-End</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>LESS</li>
          </ul>

          <ul className={styles.list2} id='list2'>
            <li>Back-End</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Firebase</li>
          </ul>
          <ul className={styles.list3} id='list3'>
            <li>Tools</li>
            <li>Chrome Dev Tools</li>
            <li>VS Code</li>
            <li>Github</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
