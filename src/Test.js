import React from 'react';

import styles from './test.module.css';
console.log({ styles });

const Test = () => <div className={styles.test}>Hello</div>;

export { Test };
