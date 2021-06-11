import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';
import { add, minus } from './test';

const Nav = () => {
  console.log(minus(add(2, 3), 3));
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
