import React from 'react';
import { FormattedMessage } from 'react-intl';
import image1 from 'images/services/services.webp';
import image2 from 'images/services/services_2.webp';

import styles from './BuyServices.module.scss';

import { AiOutlineRight} from 'react-icons/ai';

const BuyServices = ()=>{

 
  
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.services__description}>
          <h2 className={styles.services__description__title}>
            <FormattedMessage id="buy.arcticle.title" />
          </h2>
          <a href="#" className={styles.services__description__link}>
            <FormattedMessage id="buy.arcticle.link" />
            <AiOutlineRight />
          </a>
        </div>

        <div className={styles.services__column}>
          <div className={styles.services__column__item}>
            <h4 className={styles.services__column__item__title}>
              <FormattedMessage id="buy.articles.title" />
            </h4>
            <img src={image1} />
          </div>

          <article
            className={`${styles.services__column__item} ${styles.item__text}`}
          >
            <h4 className={styles.item__text__title}>
              <FormattedMessage id="buy.articles.title" />
            </h4>
            <p className={styles.item__text__desc}>
              <FormattedMessage id="buy.articles.description" />
            </p>
            <a href="#" className={styles.item__text__link}>
              <FormattedMessage id="articles.link" />
              <AiOutlineRight />
            </a>
          </article>

          <div className={styles.services__column__item}>
            <h4 className={styles.services__column__item__title}>
              <FormattedMessage id="buy.articles.title" />
            </h4>
            <img src={image2} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyServices;


      
