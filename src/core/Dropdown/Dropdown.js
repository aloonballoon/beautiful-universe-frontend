import React, { useState, createRef, useEffect } from 'react';

import styles from './Dropdown.css';
console.log({ styles });

const Dropdown = ({ props, children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} {...props}>
      <p onClick={toggleDropdown}>{title}</p>
    </div>
  );
};

export { Dropdown };
