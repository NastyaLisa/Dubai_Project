import React from 'react';
import styles from './Lang.module.scss';
import { LOCALES } from '../../../i18nProvider/index';


const Lang = ({ navbarOpen, onLanguageChange }) => {
  const handleLanguageChange = (newLocale) => {
    onLanguageChange(newLocale);
    console.log('onLanguageChange');
  };
 

  const close = `${styles.lang}`;
  const open = `${styles.lang} ${styles.lang__open} `;
  return (
    <div className={navbarOpen ? open : close}>
      {/* <a href="#UA"> */}
      <button
        onClick={() => handleLanguageChange(LOCALES.UKRAINIAN)}
        className={styles.lang__btn}
      >
        UA
      </button>
      {/* </a> */}
      {/* <a href="#"> */}
      <button
        onClick={() => handleLanguageChange(LOCALES.ENGLISH)}
        className={styles.lang__btn}
      >
        EN
      </button>
      {/* </a>  */}
    </div>
  );
};

export default Lang;

 