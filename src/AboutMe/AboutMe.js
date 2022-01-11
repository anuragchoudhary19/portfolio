import React, { useEffect } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  useEffect(() => {
    let about = document.getElementById('about');
    const options = { root: null, threshold: 0.25, rootMargin: '-150px' };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        let aboutHeading = document.getElementById('about-heading');
        let aboutContent = document.getElementById('about-content');
        if (entry.isIntersecting) {
          aboutHeading.style.opacity = '1';
          aboutHeading.style.transform = 'translateY(0)';
          aboutHeading.style.transitionDelay = '0ms';
          aboutContent.style.opacity = '1';
          aboutContent.style.transform = 'translateY(0)';
          aboutContent.style.transitionDelay = '100ms';
        }
      });
    }, options);
    observer.observe(about);
  }, []);
  return (
    <div className={styles.about} id='about'>
      <div className={styles.section}>
        <h2 className={styles.heading} id='about-heading'>
          About Me
        </h2>
        <div className={styles.content} id='about-content'>
          <p>
            I am a <b>Mechanical Engineer</b> by education, but my unfulfilled creative instincts and a few twists of
            fate brought me into the software development field.
          </p>
          <p>
            My Web Development journey started about one and a half years ago, and I must admit that I had never
            imagined that I would be able to learn so many things and would be able to build such cool web apps from
            scratch in such a short amount of time.
          </p>
          <p>
            I have built projects, such as <b style={{ color: 'var(--green)' }}>E-commerce Website</b>,
            <b style={{ color: 'var(--green)' }}> Social Media App</b>,
            <b style={{ color: 'var(--green)' }}> Messaging App</b>, etc., to count a few.
          </p>
          <p>
            I have worked on both Front-End and Back-End to ensure that I get enough idea of what goes into building a
            whole of a website.
          </p>
          <p>Hope you checkout some of the projects that I have build along the way.</p>
          <p style={{ color: 'var(--green)' }}>
            <span>
              If you are looking for a Front-End Developer/FullStack Developer for your next project, I would be more
              than happy to be a part of your project.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
