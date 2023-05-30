import React, {useState} from 'react';
import styles from './Lang.module.scss';
import { LOCALES } from '../../../i18nProvider/index';


const Lang = ({ navbarOpen, onLanguageChange }) => {
  const [activeLang, setActiveLang] = useState(LOCALES.ENGLISH); // Изначально активным будет язык ENGLISH

  const handleLanguageChange = (newLocale) => {
    onLanguageChange(newLocale);
    setActiveLang(newLocale); // Устанавливаем выбранный язык как активный
    console.log('onLanguageChange');
  };

  const close = `${styles.lang}`;
  const open = `${styles.lang} ${styles.lang__open} `;
  return (
    <div className={navbarOpen ? open : close}>
      <button
        onClick={() => handleLanguageChange(LOCALES.UKRAINIAN)}
        className={`${styles.lang__btn} ${
          activeLang === LOCALES.UKRAINIAN ? styles.active : ''
        }`}
      >
        UA
      </button>

      <button
        onClick={() => handleLanguageChange(LOCALES.ENGLISH)}
        className={`${styles.lang__btn} ${
          activeLang === LOCALES.ENGLISH ? styles.active : ''
        }`}
      >
        EN
      </button>
      {/* </a>  */}
    </div>
  );
};

export default Lang;

 