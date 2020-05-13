import React from 'react';

import styles from './NavBar.css';

const NavBar = ({ props, children, dropdowns }) => (
  <div className={styles.navbar} {...props}>
    {children}
  </div>
);

export { NavBar };
