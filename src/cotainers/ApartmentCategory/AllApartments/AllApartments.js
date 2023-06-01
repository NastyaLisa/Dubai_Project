import React from 'react';
import { FormattedMessage } from 'react-intl';
import comercial from 'images/apartment_category/Commercial_426x581.webp';
import townhouse from 'images/apartment_category/Townhous_426x581.webp';
import villa from 'images/apartment_category/Villa_426x581.webp';
import styles from './AllApartments.module.scss';
import './AllApartments.scss';
import { AiOutlineRight } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Grid,  Pagination,Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/grid';

SwiperCore.use([Pagination, Autoplay, Grid, Navigation]);

const AllApartments = () => {
  return (
    <section className={`${styles.apartments} ${styles.container}`}>
      <h2 className={styles.apartments__title}>
        <FormattedMessage id="apartments.title" />
      </h2>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },

          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        initialSlide={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.apartments__swiper}
      >
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Townhouse</p>
              <button>
                <a href="#" className={styles.apartments__card__link}>
                  <FormattedMessage id="projects.card.button" />
                  <AiOutlineRight />
                </a>
              </button>
            </div>

            <img src={townhouse} alt="illustration townhouse" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Villa</p>
              <button>
                <a href="#" className={styles.apartments__card__link}>
                  <FormattedMessage id="projects.card.button" />
                  <AiOutlineRight />
                </a>
              </button>
            </div>

            <img src={villa} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.apartments__card} ${styles.apartments__card__text}`}
          >
            <h3>
              <FormattedMessage id="apartments.card.title" />
            </h3>
            <p>
              <FormattedMessage id="apartments.card.description" />
            </p>
            <button>
              <a href="#" className={styles.apartments__card__link}>
                <FormattedMessage id="projects.card.button" />
                <AiOutlineRight />
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Comercial</p>
              <button>
                <a href="#" className={styles.apartments__card__link}>
                  <FormattedMessage id="projects.card.button" />
                  <AiOutlineRight />
                </a>
              </button>
            </div>

            <img src={comercial} alt="illustration comercial" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.apartments__card} ${styles.apartments__card__text}`}
          >
            <h3>
              <FormattedMessage id="apartments.card.title" />
            </h3>
            <p>
              <FormattedMessage id="apartments.card.description" />
            </p>
            <button>
              <a href="#" className={styles.apartments__card__link}>
                <FormattedMessage id="projects.card.button" />
                <AiOutlineRight />
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Villa</p>
              <button>
                <a href="#" className={styles.apartments__card__link}>
                  <FormattedMessage id="projects.card.button" />
                  <AiOutlineRight />
                </a>
              </button>
            </div>

            <img src={villa} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Townhouse</p>
              <button>
                <a href="#" className={styles.apartments__card__link}>
                  <FormattedMessage id="projects.card.button" />
                  <AiOutlineRight />
                </a>
              </button>
            </div>

            <img src={townhouse} alt="illustration townhouse" />
          </div>
        </SwiperSlide>

        <div className="apartments__pagination">
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet "></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default AllApartments;