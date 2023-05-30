import React from 'react';
import image1 from 'images/services/hero_buy.webp';
import { FormattedMessage } from 'react-intl';

import styles from './BuyHero.module.scss';

const BuyHero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__image}>
          <img src={image1} alt="apartments in Dubai" />
        </div>

        <div className={styles.hero__text}>
          <p className={styles.hero__subtitle}>
            <FormattedMessage id="buy.hero.subtitle" />
          </p>
          <h2 className={styles.hero__title}>
            <FormattedMessage id="buy.hero.title" />
            <span className={styles.hero__title__acent}>
              <FormattedMessage id="buy.hero.accent" />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );

};
export default BuyHero;



