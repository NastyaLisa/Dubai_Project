import React from 'react';
import { FormattedMessage } from 'react-intl';

import image1 from 'images/home/examples1.webp';
import image2 from 'images/home/examples2.webp';

import styles from './Examples.module.scss';

const Examples = ()=>{

 
  
  return (
    <section className={styles.examples}>
      <div className={styles.container}>
        <div className={styles.examples__column}>
          <img
            src={image1}
            alt="example dubai rent"
            className={styles.examples__image}
          />
          <p className={styles.examples__text}>
            <FormattedMessage id="examples" />
          </p>
        </div>
        <div className={styles.examples__col}>
          <img
            src={image2}
            alt="example dubai rent"
            className={styles.examples__image}
          />
          <p className={styles.examples__text}>
            <FormattedMessage id="examples" />
          </p>
        </div>
      </div>
    </section>
  );
};
export default Examples;


      
