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
          <h2>Useful articles</h2>
          <a>View all articles <AiOutlineRight/></a>
        </div>
       
        <div className={styles.articles__column}>
         
          <div className={styles.articles__column__item}>
            <h4 className={styles.articles__column__item__title}>Discover Architecture</h4>
            <img src={image1}/>
          </div>

          <div className={`${styles.articles__column__item} ${styles.item__text}`} >
            <span>Jule 03, 2022</span>
            <h4>Discover Architecture</h4>
            <p>Projects for many large domestic and foreign corporations, enterprises in many elds such</p>
            <a>Learn more <AiOutlineRight/></a>
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


      
