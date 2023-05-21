import React from 'react';
import comercial from 'images/apartment_category/Commercial_426x581.webp';
import townhouse from 'images/apartment_category/Townhous_426x581.webp';
import villa from 'images/apartment_category/Villa_426x581.webp';
import styles from './AllApartments.module.scss';

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
        All Apartments <br />
        Category
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
          // 368: {
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // 769: {
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper mySwiper-apartments"
      >
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Townhouse</p>
              <button className={styles.apartments__btn}>
                <a href="#">
                  Learn more <AiOutlineRight />
                </a>{' '}
              </button>
            </div>

            <img src={townhouse} alt="illustration townhouse" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Villa</p>
              <button className={styles.apartments__btn}>
                <a href="#">
                  Learn more <AiOutlineRight />
                </a>{' '}
              </button>
            </div>

            <img src={villa} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.apartments__card} ${styles.card__text}`}>
            <h3>Apartments</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              molestie integer aliquam consectetur. Faucibus vitae dui massa
              tellus magna sit.
            </p>
            <button className={styles.apartments__btn}>
              <a href="#">
                Learn more <AiOutlineRight />
              </a>{' '}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Comercial</p>
              <button className={styles.apartments__btn}>
                <a href="#">
                  Learn more <AiOutlineRight />
                </a>{' '}
              </button>
            </div>

            <img src={comercial} alt="illustration comercial" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.apartments__card} ${styles.card__text}`}>
            <h3>Apartments</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              molestie integer aliquam consectetur. Faucibus vitae dui massa
              tellus magna sit.
            </p>
            <button className={styles.apartments__btn}>
              <a href="#">
                Learn more <AiOutlineRight />
              </a>{' '}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Villa</p>
              <button className={styles.apartments__btn}>
                <a href="#">
                  Learn more <AiOutlineRight />
                </a>{' '}
              </button>
            </div>

            <img src={villa} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.apartments__card}>
            <div className={styles.apartments__card__inform}>
              <p className={styles.apartments__card__title}>Townhouse</p>
              <button className={styles.apartments__btn}>
                <a href="#">
                  Learn more <AiOutlineRight />
                </a>{' '}
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