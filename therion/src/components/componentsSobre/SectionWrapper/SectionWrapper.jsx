import React from 'react';
import styles from './SectionWrapper.module.css';

const SectionWrapper = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
};

export default SectionWrapper;