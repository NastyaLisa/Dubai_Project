import React from 'react';

import image1 from 'images/home/article_1.png';
import image2 from 'images/home/article_2.jpg';

import styles from './Articles.module.scss';

import { AiOutlineRight} from 'react-icons/ai';

const Articles = ()=>{

 
  
  return(
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articles__description}> 
          <h2 className={styles.articles__description__title}>Useful articles</h2>
          <a href="#" className={styles.articles__description__link}>View all articles <AiOutlineRight/></a>
        </div>
       
        <div className={styles.articles__column}>
         
          <div className={styles.articles__column__item}>
            <h4 className={styles.articles__column__item__title}>Discover Architecture</h4>
            <img src={image1}/>
          </div>

          <div className={`${styles.articles__column__item} ${styles.item__text}`} >
            <span className={styles.item__text__date}>Jule 03, 2022</span>
            <h4 className={styles.item__text__title}>Discover Architecture</h4>
            <p className={styles.item__text__desc}>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
            <a href="#" className={styles.item__text__link}>Learn more <AiOutlineRight/></a>
          </div>

          <div className={styles.articles__column__item} >
            <h4 className={styles.articles__column__item__title}>Discover Architecture</h4>
            <img src={image2}/>
          </div>

        </div>
      </div>
      
    </section>

  );
};
export default Articles;


      
