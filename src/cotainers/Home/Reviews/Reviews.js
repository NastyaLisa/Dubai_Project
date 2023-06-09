import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Reviews.module.scss';
import './Reviews.scss';
import paul from 'images/home/reviews/Mask-Group2.png';
import robert from 'images/home/reviews/Mask-Group.png';
import {ImQuotesRight} from 'react-icons/im';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

SwiperCore.use([Pagination, Autoplay]);

const Reviews = ()=>{
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className="reviews__slider">
          <Swiper
            slidesPerView={2}
            spaceBetween={55}
            initialSlide={0}
            centeredSlides={true} // Центрирование слайдов
            centeredSlidesBounds={true} // Ограничение центрирования
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
            }}
            className="mySwiper mySwiper-reviews"
            breakpoints={{
              0: {
                slidesPerView: 1,              
              },
              576: {
                slidesPerView: 2, 
                width: 600,
              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                width: 1100,               
              },
            }}
          >
            
            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes} />
                <div className={styles.reviews__column__img}>
                  <img src={paul} />
                </div>
                <span className={styles.person__name}>
                  <FormattedMessage id="reviews.personName1" />
                </span>
                <span className={styles.person__position}>
                  <FormattedMessage id="reviews.personPosition1" />
                  <span className={styles.person__company}>
                    <FormattedMessage id="reviews.personCompany1" />
                  </span>
                </span>
                <p className={styles.person__quotes}>
                  <FormattedMessage id="reviews.personQuotes1" />
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes} />
                <div className={styles.reviews__column__img}>
                  <img src={robert} />
                </div>

                <span className={styles.person__name}>
                  <FormattedMessage id="reviews.personName2" />
                </span>
                <span className={styles.person__position}>
                  <FormattedMessage id="reviews.personPosition2" />
                  <span className={styles.person__company}>
                    <FormattedMessage id="reviews.personCompany2" />
                  </span>
                </span>
                <p className={styles.person__quotes}>
                  <FormattedMessage id="reviews.personQuotes2" />
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes} />
                <div className={styles.reviews__column__img}>
                  <img src={paul} />
                </div>
                <span className={styles.person__name}>
                  <FormattedMessage id="reviews.personName1" />
                </span>
                <span className={styles.person__position}>
                  <FormattedMessage id="reviews.personPosition1" />
                  <span className={styles.person__company}>
                    <FormattedMessage id="reviews.personCompany1" />
                  </span>
                </span>
                <p className={styles.person__quotes}>
                  <FormattedMessage id="reviews.personQuotes1" />
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes} />
                <div className={styles.reviews__column__img}>
                  <img src={robert} />
                </div>

                <span className={styles.person__name}>
                  <FormattedMessage id="reviews.personName2" />
                </span>
                <span className={styles.person__position}>
                  <FormattedMessage id="reviews.personPosition2" />
                  <span className={styles.person__company}>
                    <FormattedMessage id="reviews.personCompany2" />
                  </span>
                </span>
                <p className={styles.person__quotes}>
                  <FormattedMessage id="reviews.personQuotes2" />
                </p>
              </div>
            </SwiperSlide>

            <div className="reviews-pagination">
              <div className="swiper-pagination">
                <span className="swiper-pagination-bullet "></span>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Reviews;