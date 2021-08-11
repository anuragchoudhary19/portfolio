import React from 'react';
import logo from '../images/19199262.jpg';
import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <header>
        <h1>Fullstack Developer using MERN Stack</h1>
        <h3>Hi there, I am Anurag and this is what I do.</h3>
      </header>
      <article>
        <div>
          <p>
            I started my Web Development journey about an year ago and I must admit that I never imagined that I would
            be able to learn so many things and would be able to build such websites in such a short amount of time.
          </p>
          <p>
            It had been quite an incredible journey till now and I am confident that I would like to continue it even
            further.
          </p>
          <p>Hope you checkout some of the projects that I have build along the way.</p>
          <p>
            <span style={{ color: '#ffa500' }}>
              If you are looking for a Web Developer for your next project, then feel free to contact me.
            </span>
          </p>
        </div>
        <div className={styles.logo}>{/* <img src={logo} alt='logo' /> */}</div>
      </article>
    </div>
  );
};

export default Introduction;
