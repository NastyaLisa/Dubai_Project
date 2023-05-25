import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';
import image1 from 'images/hero/slider_1.webp';
import image2 from 'images/hero/slider_2.webp';
import image3 from 'images/hero/slider_3.webp';
import  styles from'./Hero.module.scss';
import {AiOutlineRight} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import Social from '../../../components/Social/Social';


SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
  const intl = useIntl();
  const menu = [
    { accent: '01', textId: 'Home.slider.1' },
    { accent: '02', textId: 'Home.slider.2' },
    { accent: '03', textId: 'Home.slider.3' },
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
          <button>
            <NavLink
              exact="true"
              to="/contacts"
              className={styles.hero__text__button}
            >
              <FormattedMessage id="button.consultation" />
              <AiOutlineRight />
            </NavLink>
          </button>
        </div>

        <Social className="main" />
        <Swiper
          slidesPerView={1}
          pagination={{
            el: `.${styles.pagination}`,
            clickable: true,
            bulletClass: `${styles.pagination__bullet}`,
            bulletActiveClass: `${styles.pagination__bullet__active}`,
            renderBullet: function (index, className) {
              return `<div class="${className} ${styles.pagination__bullet}">
          <div class="${styles.pagination__item}">
            <span class="${styles.pagination__accent}">
              ${menu[index].accent}
            </span>
            <span class="${styles.pagination__text}">
              ${intl.formatMessage({ id: menu[index].textId })}
            </span>
          </div>
        </div>`;
            },
          }}
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: `.${styles.swiper_button_next}`,
            prevEl: `.${styles.swiper_button_prev}`,
          }}
          className={styles.hero__swiper}
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

          <div className={styles.swiper_button}>
            <button className={styles.swiper_button_prev}>PREV</button>
            <span>|</span>
            <button className={styles.swiper_button_next}>NEXT</button>
          </div>
          <div className={styles.pagination__container}>
            <div className={styles.pagination}></div>
          </div>
        </Swiper>
      </div>
    </section>
  );

};
export default Hero;



