import React from 'react';
import { FormattedMessage } from 'react-intl';
import { offersData } from './offersData';
import styles from './BestOffers.module.scss';
import { useRef } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Grid, Pagination, Navigation } from 'swiper';
import('swiper/scss').then(() => {
  import('swiper/scss/navigation');
  import('swiper/scss/pagination');
  
});

import 'swiper/scss/autoplay';
import 'swiper/scss/grid';

SwiperCore.use([Pagination,  Grid, Navigation]);

const BestOffers = () => {
  const swiper = useRef(null);
  
  function renderBullet(index, className) {
    const offersDataLength = offersData.length;

    if (
      index < 3 ||
    index === offersDataLength - 2 ||
    index === offersDataLength - 1
    ) {
      return `<span class="${className}">${index + 1}</span>`;
    } else if (index === 3) {
      return `<span class="${className}">...</span>`;
    } else {
      return '';
    }
  }

  
  
  return (
    <section className={`${styles.offers} ${styles.container}`}>
      <h2 className={styles.offers__title}>
        <FormattedMessage id="apartments.offer" />
      </h2>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
              rows: 5,
              fill: 'row',
            },
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 3,
              fill: 'row',
            },
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },

          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
              rows: 3,
              fill: 'row',
            },
          },
        }}
        initialSlide={0}
        loop={true}
        ref={swiper}
        pagination={{
          clickable: true,
          bulletClass: `${styles.paginationBullet}`,
          renderBullet: renderBullet,
          bulletActiveClass: `${styles.paginationItemActive}`,
          el: `.${styles.paginationWrapper}`,
        }}
        navigation={{
          prevEl: `.${styles.prevBtn}`,
          nextEl: `.${styles.nextBtn}`,
        }}
        className={`.${styles.slider}`}
      >
        {offersData.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className={styles.offers__card} key={index}>
              <div className={styles.offers__card__image}>
                <img src={offer.image} alt={`illustration ${offer.title}`} />
              </div>
              <div className={styles.offers__card__inform}>
                <p className={styles.inform__text}>{offer.type}</p>
                <h3 className={styles.inform__title}>{offer.title}</h3>
                <p className={styles.inform__text}>{offer.description}</p>
                <button className={styles.inform__btn}>
                  <a href="#" className={styles.inform__btn}>
                    Learn more <AiOutlineRight />
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={styles.paginationContainer}>
          <button className={`${styles.prevBtn} ${styles.navBtn}`}>
            <AiOutlineLeft />
          </button>
          <div className={styles.paginationWrapper}>
            <div
              className={`${styles.paginationBullet} swiper-pagination`}
            ></div>
          </div>

          <button className={`${styles.nextBtn} ${styles.navBtn}`}>
            <AiOutlineRight />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default BestOffers;
