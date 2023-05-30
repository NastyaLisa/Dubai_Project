import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './BuyArticles.module.scss';

const BuyArticles = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <article
          className={`${styles.articles__content} ${styles.articles__main}`}
        >
          <h3 className={styles.articles__title}>
            <FormattedMessage id="buy.articles.title1" />
          </h3>
          <p className={styles.articles__text}>
            <FormattedMessage id="buy.articles.text1" />
          </p>
          <h3 className={styles.articles__title}>
            <FormattedMessage id="buy.articles.title2" />
          </h3>
          <p className={styles.articles__text}>
            <FormattedMessage id="buy.articles.text2" />
          </p>
        </article>
        <div className={`${styles.articles__content} ${styles.articles__list}`}>
          <ul>
            <li className={styles.articles__text}>
              <FormattedMessage id="buy.articles.text3" />
            </li>
            <li className={styles.articles__text}>
              <FormattedMessage id="buy.articles.text4" />
            </li>
            <li className={styles.articles__text}>
              <FormattedMessage id="buy.articles.text5" />
            </li>
            <li className={styles.articles__text}>
              <FormattedMessage id="buy.articles.text6" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default BuyArticles;
