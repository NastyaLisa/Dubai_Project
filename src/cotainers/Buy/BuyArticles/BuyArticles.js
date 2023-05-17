import React from 'react';

import styles from './BuyArticles.module.scss';

const BuyArticles = () => {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={[styles.articles__content, styles.articles__main].join(' ')}>
         
          <h3 className={styles.articles__title}>Challenge</h3>
          <p className={styles.articles__text}>
          To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk 
          was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. 
          She knew nothing. 
          I knew everything…been there, done that. She was in the moment, 
          I was in the past. She was mindful. I was mindless.
          </p>
          <h3 className={styles.articles__title}>Everything along the way</h3>
          <p className={styles.articles__text}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. 
          The same is true as we experience the emotional sensation of stress from our first instances of social 
          rejection or ridicule. We quickly learn to fear and thus automatically 
          avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
          </p>
        </div>
        <div className={[styles.articles__content, styles.articles__list].join(' ')}>
         
          <ul >
            <li className={styles.articles__text}>
              Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, 
      blade of grass, and crack in the sidewalk was something to be picked up, 
      looked at, tasted, smelled, and shaken. </li>
            <li className={styles.articles__text}>
              Everything was interesting to her. She knew nothing. I knew everything…been there, done that. 
      She was in the moment, I was in the past. She was mindful. I was mindless.</li>
            <li className={styles.articles__text}>
              One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. 
      The same is true as we experience the emotional sensation of stress 
      from our first instances of social rejection or ridicule. </li>
            <li className={styles.articles__text}>
              We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, 
      including the most common of all: making mistakes.</li>
          </ul>
        </div>
       
      </div>
    </section>
  );
};
export default BuyArticles;
