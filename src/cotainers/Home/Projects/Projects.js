// router ???

import React from 'react';
import { FormattedMessage } from 'react-intl';
import image1 from 'images/home/villas.webp';
import image2 from 'images/home/villas_2.webp';
import image3 from 'images/home/houses.webp';
import styles from './Projects.module.scss';

import { AiOutlineRight } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Grid,  Pagination } from 'swiper';
import 'swiper/scss';
// import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/grid';

SwiperCore.use([Pagination, Autoplay, Grid]);

const Projects = () => {
  return (
    <section className={`${styles.projects} ${styles.container}`}>
      <header className={styles.projects__header}>
        <h2 className={styles.projects__title}>
          <FormattedMessage id="projects.title" />
        </h2>
        <nav className={styles.projects__nav}>
          <ul className={styles.projects__nav__list}>
            <li>
              <a href="#">
                <FormattedMessage id="projects.all" />
              </a>
            </li>
            <li>
              <a href="#">
                <FormattedMessage id="projects.building" />
              </a>
            </li>
            <li>
              <a href="#">
                <FormattedMessage id="projects.interior" />
              </a>
            </li>
            <li>
              <a href="#">
                <FormattedMessage id="projects.viewAll" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

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
          950: {
            slidesPerView: 3,
            spaceBetween: 20,
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={styles.projects__swiper}
        // className="mySwiper mySwiper-projects"
      >
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Villas</p>
            <img src={image1} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Villas</p>
            <img src={image2} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.projects__card} ${styles.card__text}`}>
            <h3>
              
              <FormattedMessage id="projects.card.title" />
            </h3>
            <p>
              <FormattedMessage id="projects.card.description" />
            </p>
            <button>
              <a href="#">
                <FormattedMessage id="projects.card.button" />
                <AiOutlineRight />
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Houses</p>
            <img src={image3} alt="illustration house" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.projects__card} ${styles.card__text}`}>
            <h3>
              
              <FormattedMessage id="projects.card.title" />
            </h3>
            <p>
              <FormattedMessage id="projects.card.description" />
            </p>
            <button>
              <a href="#">
                <FormattedMessage id="projects.card.button" />
                <AiOutlineRight />
              </a>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Villas</p>
            <img src={image2} alt="illustration villa" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Houses</p>
            <img src={image3} alt="illustration house" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.projects__card}>
            <p className={styles.projects__card__title}>Villas</p>
            <img src={image1} alt="illustration villa" />
          </div>
        </SwiperSlide>

        <div className="projects__pagination">
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet "></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Projects;