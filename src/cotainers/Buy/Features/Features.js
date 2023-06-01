import React from 'react';
import { FormattedMessage } from 'react-intl';
import image1 from 'images/services/features1.webp';
import image2 from 'images/services/features2.webp';
import image3 from 'images/services/features3.webp';

import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid__container}>
          <div className={styles.grid__container__item1}>
            <img src={image1} alt="sea views in Dubai" />
          </div>
          <div className={styles.grid__container__item2}>
            <img src={image2} alt="sea views in Dubai" />
          </div>
          <div className={styles.grid__container__item3}>
            <img src={image3} alt="sea views in Dubai" />
          </div>
        </div>
        <div className={styles.features__statistic}>
          <ul className={styles.features__statistic__list}>
            <li className={styles.features__statistic__item}>
              <p className={styles.features__statistic__item__number}>20</p>
              <p className={styles.features__statistic__item__label}>
                <FormattedMessage id="buy.features.statistic1" />
              </p>
            </li>
            <li className={styles.features__statistic__item}>
              <p className={styles.features__statistic__item__number}>7</p>
              <p className={styles.features__statistic__item__label}>
                <FormattedMessage id="buy.features.statistic2" />
              </p>
            </li>
            <li className={styles.features__statistic__item}>
              <p className={styles.features__statistic__item__number}>
                100<sup className={styles.sup}>+</sup>
              </p>
              <p className={styles.features__statistic__item__label}>
                <FormattedMessage id="buy.features.statistic3" />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Features;
