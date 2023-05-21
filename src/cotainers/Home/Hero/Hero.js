import React from 'react';
import { FormattedMessage } from 'react-intl';
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
    { accent: '01', textId: 'Home.slider1' },
    { accent: '02', textId: 'Home.slider2' },
    { accent: '03', textId: 'Home.slider3' },
  ];
  

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__text}>
          <span className={styles.hero__text__title__description}>
            Real Estate
          </span>
          <h1 className={styles.hero__text__title}>
            <FormattedMessage id="Home.welcome" />
            <span className={styles.hero__text__title__acent}>
              <FormattedMessage id="Home.to" />
            </span>
            <FormattedMessage id="Home.luxury" />
          </h1>
          <button className={styles.hero__text__button}>
            <FormattedMessage id="button.consultation" />
            <AiOutlineRight />
          </button>
        </div>

        {/* <Social className= {styles.social__hero}/> */}
        <Swiper
          slidesPerView={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              // const { accent, textId } = menu;
              console.log(menu[index]);

              return `
                 <div  class="swiper-pagination-bullet ${className}">
                  <div class="swiper-pagination__item">
                    <span class="pagination__accent">
                      ${menu[index].accent}
                    </span>
                     <span class="pagination__text">
                    ${menu[index].textId}
                    </span> 
                  </div>
                </div>
              `;
            },
          }}
          autoplay={{
            delay: 5000,
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
              <img src={image1} alt="" className={styles.image} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hero__slider}>
              <img src={image2} alt="" className={styles.image} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.hero__slider}>
              <img src={image3} alt="" className={styles.image} />
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



