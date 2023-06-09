import React from 'react';

import { FormattedMessage } from 'react-intl';


import image1 from 'images/home/article_1.png';
import image2 from 'images/home/article_2.jpg';

import styles from './Articles.module.scss';

import { AiOutlineRight} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Articles = ()=>{

 
  
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articles__description}>
          <h2 className={styles.articles__description__title}>
            <FormattedMessage id="home.arcticleTitle" />
          </h2>
          <NavLink to="/blog" className={styles.articles__description__link}>
            <FormattedMessage id="home.arcticleLink" />
            <AiOutlineRight />
          </NavLink>
        </div>

        <div className={styles.articles__column}>
          <div className={styles.articles__column__item}>
            <h4 className={styles.articles__column__item__title}>
              <FormattedMessage id="articles.title" />
            </h4>
            <img src={image1} />
          </div>
          <article
            className={`${styles.articles__column__item} ${styles.item__text}`}
          >
            <span className={styles.item__text__date}>
              <FormattedMessage id="articles.date" />
            </span>
            <h4 className={styles.item__text__title}>
              <FormattedMessage id="articles.title" />
            </h4>
            <p className={styles.item__text__desc}>
              <FormattedMessage id="articles.description" />
            </p>
            <a href="#" className={styles.item__text__link}>
              <FormattedMessage id="articles.link" />
              <AiOutlineRight />
            </a>
          </article>

          <div className={styles.articles__column__item}>
            <h4 className={styles.articles__column__item__title}>
              <FormattedMessage id="articles.title" />
            </h4>
            <img src={image2} />
          </div>
        </div>
      </div>
    </section>
   
  );
};
export default Articles;


      
