import React from 'react';

import image from 'images/services/descr_buy.webp';

import styles from './BuyDescription.module.scss';

const BuyDescription = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <div className={styles.description__content}>
          <p className={styles.description__subtitle}>Service <span className={styles.description__subtitle__accent}>Buying property in Dubai</span></p>
          <h3 className={styles.description__title}>Real estate investment in Dubai, UAE</h3>
          <p className={styles.description__text}>
          This response is important for our ability to learn from mistakes, but
          it alsogives rise to self-criticism, because it is part of the
          threat-protection system. In other words, what keeps us safe can go
          too far, and keep us too safe. In fact it can trigger self-censoring.
          </p>
          <p className={styles.description__text}>
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in the future. The same is true as we experience the
          emotional sensation of stress from our first instances of social
          rejection or ridicule. We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, i ncluding the
          most common of all.
          </p>
          <p className={styles.description__text}>
          This response is important for our ability to learn from mistakes, but
          it alsogives rise to self-criticism, because it is part of the
          threat-protection system. In other words, what keeps us safe can go
          too far, and keep us too safe. In fact it can trigger self-censoring.
          </p>
          <p className={styles.description__text}>
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in the future. The same is true as we experience the
          emotional sensation of stress from our first instances of social
          rejection or ridicule. We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, i ncluding the
          most common of all.
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
