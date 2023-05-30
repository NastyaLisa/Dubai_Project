import React from 'react';
import { FormattedMessage } from 'react-intl';
import image from 'images/services/descr_buy.webp';

import styles from './BuyDescription.module.scss';

const BuyDescription = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <div className={styles.description__content}>
          <p className={styles.description__subtitle}>
            <FormattedMessage id="buy.descr.service" />
            <span className={styles.description__subtitle__accent}>
              <FormattedMessage id="buy.descr.subtitle" />
            </span>
          </p>
          <h3 className={styles.description__title}>
            <FormattedMessage id="buy.descr.title" />
          </h3>
          <p className={styles.description__text}>
            <FormattedMessage id="buy.descr.text1" />
          </p>
          <p className={styles.description__text}>
            <FormattedMessage id="buy.descr.text2" />
          </p>
          <p className={styles.description__text}>
            <FormattedMessage id="buy.descr.text3" />
          </p>
          <p className={styles.description__text}>
            <FormattedMessage id="buy.descr.text4" />
          </p>
        </div>

        <div className={styles.description__image}>
          <img src={image} alt="sea views in Dubai" />
        </div>
      </div>
    </section>
  );
};
export default BuyDescription;
