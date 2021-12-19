import React, { useEffect } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  // useEffect(() => {
  //   let about = document.getElementById('about');
  //   const options = { root: null, threshold: 0.25, rootMargin: '-150px' };
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       let aboutHeading = document.getElementById('about-heading');
  //       let aboutContent = document.getElementById('about-content');
  //       if (entry.isIntersecting) {
  //         aboutHeading.style.opacity = '1';
  //         aboutHeading.style.transform = 'translateY(0)';
  //         aboutHeading.style.transitionDelay = '0ms';
  //         aboutContent.style.opacity = '1';
  //         aboutContent.style.transform = 'translateY(0)';
  //         aboutContent.style.transitionDelay = '100ms';
  //       }
  //     });
  //   }, options);
  //   observer.observe(about);
  // }, []);
  return (
    <div className={styles.about} id='about'>
      <div className={styles.section}>
        <h2 id='about-heading'>About Me</h2>
        <div id='about-content'>
          <p>
            My Web Development journey started about an year ago and I must admit that I never imagined that I would be
            able to learn so many things and would be able to build such cool web apps in such a short amount of time.
          </p>
          <br />
          <p>
            I have worked on projects such as an E-commerce, a Social Media, a Messaging App etc. to count a few and
            there are few more in the pipeline.
          </p>
          <br />
          <p>
            I have worked on both Front-End and Back-End to ensure that I get enough idea of what goes in build a whole
            of a website.
          </p>
          <br />
          <p>
            It had been quite an incredible journey till now and I am confident that I would like to continue it even
            further.
          </p>
          <br />
          <p>Hope you checkout some of the projects that I have build along the way.</p>
          <br />
          <p style={{ color: 'var(--green)' }}>
            <span>If you are looking for a Web Developer for your next project, then feel free to contact me.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
