import React from 'react';
import styles from './Lang.module.scss';
// import fonts from '@scss-utils/fonts';

const Lang = ({nav})=> {
  const close =`${styles.lang}`;
  const open =`${styles.lang} ${styles.lang__open} `;
  return(

    <div className={nav ? open : close}>
      <a href="#">
        <button className={styles.lang__btn}>UA</button>
      </a>
      <a href="#">
        <button className={styles.lang__btn}>EN</button>
      </a>
    </div>
  );
};

export default Lang;