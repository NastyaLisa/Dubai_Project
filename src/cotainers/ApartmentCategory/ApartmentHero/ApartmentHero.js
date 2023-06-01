import React from 'react';
import { FormattedMessage } from 'react-intl';
import image1 from 'images/apartment_category/apartament_hero.webp';

import styles from './ApartmentHero.module.scss';

const ApartmentHero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <img
          src={image1}
          alt="apartments in Dubai"
          className={styles.hero__image}
        />
        <div className={styles.hero__text}>
          <h2 className={styles.hero__title}>
            <FormattedMessage id="apartment.hero.title" />
            <span className={styles.hero__title__acent}>
              <FormattedMessage id="apartment.hero.accent" />
              
            </span>
          </h2>
        </div>
      </div>
    </section>
  );

};
export default ApartmentHero;



