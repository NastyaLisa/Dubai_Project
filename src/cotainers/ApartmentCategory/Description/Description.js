import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Description.module.scss';

const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <h2 className={styles.description__main__title}>
          <FormattedMessage id="apartment.description.mainTitle" />
        </h2>
        <p className={styles.description__text}>
          <FormattedMessage id="apartment.description.text1" />
        </p>
        <h3 className={styles.description__title}>
          <FormattedMessage id="apartment.description.title" />
        </h3>
        <p className={styles.description__text}>
          <FormattedMessage id="apartment.description.text2" />
        </p>
      </div>
    </section>
  );
};
export default Description;



