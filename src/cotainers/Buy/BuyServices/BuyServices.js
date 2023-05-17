import React from 'react';

import image1 from 'images/services/services.webp';
import image2 from 'images/services/services_2.webp';

import styles from './BuyServices.module.scss';

import { AiOutlineRight} from 'react-icons/ai';

const BuyServices = ()=>{

 
  
  return(
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.services__description}> 
          <h2 className={styles.services__description__title}>We will also propose</h2>
          <a href="#" className={styles.services__description__link}>View all services <AiOutlineRight/></a>
        </div>
       
        <div className={styles.services__column}>
         
          <div className={styles.services__column__item}>
            <h4 className={styles.services__column__item__title}>Mortgage Registration</h4>
            <img src={image1}/>
          </div>

          <div className={`${styles.services__column__item} ${styles.item__text}`} >
           
            <h4 className={styles.item__text__title}>Mortgage Registration</h4>
            <p className={styles.item__text__desc}>A person applying for a mortgage in the United Arab Emirates must meet the following requirements</p>
            <a href="#" className={styles.item__text__link}>Learn more <AiOutlineRight/></a>
          </div>

          <div className={styles.services__column__item} >
            <h4 className={styles.services__column__item__title}>Mortgage Registration</h4>
            <img src={image2}/>
          </div>

        </div>
      </div>
      
    </section>

  );
};
export default BuyServices;


      
