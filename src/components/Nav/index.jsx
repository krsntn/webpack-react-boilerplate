import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Page 1
          </Link>
        </li>
        <li>
          <Link to="/page2" className={styles.link}>
            Page 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
