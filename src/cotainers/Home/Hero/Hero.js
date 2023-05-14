import React  from 'react';
import image1 from 'images/hero/slider_1.webp';
import image2 from 'images/hero/slider_2.webp';
import image3 from 'images/hero/slider_3.webp';
import  styles from'./Hero.module.scss';
import {AiOutlineRight} from 'react-icons/ai';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './SwiperStyles.scss';
// import Social from '../../../components/Social/Social';


SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
  const menu = [
    {accent: '01', text: 'Lorem Ipsum \nDolorem apset'},
    {accent: '02', text: 'Lorem Ipsum \nDolorem apset'},
    {accent: '03', text: 'Lorem Ipsum \nDolorem apset'},
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container} >
        <div className={styles.hero__text}>
          <span className={styles.hero__text__title__description}>Real Estate</span>
          <h1 className={styles.hero__text__title}>Welcome&nbsp; Home 
            <span className={styles.hero__text__title__acent} > To&nbsp;</span> 
             Luxury</h1>
          <button className={styles.hero__text__button}> Book a consultation 
            <AiOutlineRight/>
          </button>
        </div>
        
        {/* <Social className= {styles.social__hero}/> */}
        <Swiper
          slidesPerView={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `
               <div  class="swiper-pagination-bullet ${className}">
              <div class="swiper-pagination__item">
                    <span class="pagination__accent">${menu[index].accent}</span>
                    <span class="pagination__text">${menu[index].text}</span>
                  </div>
                </div>
              `;
            },

          }}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          
          className="mySwiper mySwiper-hero"
        >
       
          <SwiperSlide>
            <div className={styles.hero__slider}>
              <img src={image1} alt=""className={styles.image}/>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hero__slider}>
              <img src={image2} alt=""className={styles.image}/>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hero__slider}>
              <img src={image3} alt=""className={styles.image}/>
            </div>
            
          </SwiperSlide>
          <div className="swiper_button">
            <button className="swiper-button-prev">PREV</button>
            <span>|</span>
            <button className="swiper-button-next">NEXT</button>
          </div>
  
          <div className="swiper-pagination"></div>
  
        </Swiper>
      </div>
    </section>
  );

};
export default Hero;



