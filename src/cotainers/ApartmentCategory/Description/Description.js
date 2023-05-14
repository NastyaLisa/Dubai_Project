import React from 'react';
import styles from './Description.module.scss';

const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <h2 className={styles.description__main__title}>
          Apartments
        </h2>
        <p className={styles.description__text}>
          To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up,
          looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing.
          I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.
        </p>
        <h3 className={styles.description__title}>
          Everything along the way
        </h3>
        <p className={styles.description__text}>
          One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future.
          The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule.
          We quickly learn to fear and thus automatically
          avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
        </p>
      </div>
    </section>

  );
};
export default Description;



