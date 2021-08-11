import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to={'/message'}>Say Hello</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
