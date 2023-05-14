import React from 'react';
import styles from './Logo.module.scss';

const Logo =() => {
  return(
    <div className={styles.logo}>
      
      <span className={styles.logo__title}>
      Dubai Realty</span>
      <span className={styles.logo__subtitle}>
      Real Estate
      </span>
    </div>
  );
};

export default Logo;