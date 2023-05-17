import React from 'react';
import image1 from 'images/services/hero_buy.webp';

import styles from './BuyHero.module.scss';

const BuyHero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container} >
        <img src={image1} alt="apartments in Dubai" className={styles.hero__image} />
        <div className={styles.hero__text}>
          <p className={styles.hero__subtitle}>Rent</p>
          <h2 className={styles.hero__title}> Furnished Apartments 
            <br />
            <span className={styles.hero__title__acent}>in Dubai </span>
          </h2>
        </div>
      </div>
    </section>
  );

};
export default BuyHero;



