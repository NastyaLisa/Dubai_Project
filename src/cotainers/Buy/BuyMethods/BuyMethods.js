import React from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';
import styles from './BuyMethods.module.scss';

const BuyMethods = () => {
  return (
    <section className={styles.methods}>
      <div className={styles.container}>
        <div className={styles.methods__content}>
          <h3 className={styles.methods__title}>
            <FormattedMessage id="buy.methods.title" />
          </h3>
          <p className={styles.methods__text}>
            <FormattedMessage id="buy.methods.text1" />
          </p>
          <p className={styles.methods__text}>
            <FormattedMessage id="buy.methods.text2" />
          </p>
        </div>

        <div className={styles.methods__quote}>
          <ImQuotesRight className={styles.methods__quote__mark} />
          <div className={styles.box}>
            <blockquote className={styles.methods__quote__content}>
              <FormattedMessage id="buy.methods.quote" />
            </blockquote>
            <div>
              <cite className={styles.methods__quote__author}>
                Anastasiia <br />
                <span className={styles.methods__quote__author__descr}>
                  Junior Frontend Developer
                </span>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyMethods;
