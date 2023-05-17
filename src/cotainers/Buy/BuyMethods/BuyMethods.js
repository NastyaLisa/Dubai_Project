import React from 'react';
import {ImQuotesRight} from 'react-icons/im';
import styles from './BuyMethods.module.scss';

const BuyMethods = () => {
  return (
    <section className={styles.methods}>
      <div className={styles.container}>
        <div className={styles.methods__content}>
          <h3 className={styles.methods__title}>
          Methods for Everyone
          </h3>
          <p className={styles.methods__text}>
            This response is important for our ability to learn from mistakes,
            but it alsogives rise to self-criticism, because it is part of the
            threat-protection system. In other words, what keeps us safe can go
            too far, and keep us too safe. In fact it can trigger
            self-censoring.
          </p>
          <p className={styles.methods__text}>
            One touch of a red-hot stove is usually all we need to avoid that
            kind of discomfort in the future. The same is true as we experience
            the emotional sensation of stress from our first instances of social
            rejection or ridicule. We quickly learn to fear and thus
            automatically avoid potentially stressful situations of all kinds, i
            ncluding the most common of all.
          </p>
        </div>
     
        <div className={styles.methods__quote}>
          <ImQuotesRight className={styles.methods__quote__mark}/>
          <div className={styles.box}>
            <blockquote className={styles.methods__quote__content}>
          Often the path to success lies through many unsuccessful attempts 
          and trials that cause emotional stress. But it/s important not to give in to disappointment and fear, but to continue working towards achieving your goals, 
          because in the end, victory and success always come.
            </blockquote>
            <div >
              <p className={styles.methods__quote__author}>
            Anastasiia <br />
                <span className={styles.methods__quote__author__descr} >Junior Frontend Developer</span>
              </p>
            </div>
          </div>
         
            
            
         
        </div>
      </div>
    </section>
  );
};
export default BuyMethods;
