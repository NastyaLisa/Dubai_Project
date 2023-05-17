import React from 'react';
import styles from './Reviews.module.scss';
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
            slidesPerGroup={1}
            spaceBetween={60}
            initialSlide={1}
            loop={true}
            
            autoplay={{
              delay: 50000,
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
                slidesPerView:1,
                slidesPerGroup:1,
                spaceBetween: 50,
              },
              368: {
                slidesPerView:2,
                slidesPerGroup:1,
                spaceBetween: 50,
             
              },
              769: {
                slidesPerView:2,
                slidesPerGroup:1,
                spaceBetween: 60,
           
              },
            }}
          >
           
            <SwiperSlide >
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes}/>
                <div className={styles.reviews__column__img}>
                  <img src={paul}/>
                </div>
                <span className={styles.person__name}>
                  Paul</span>
                <span className={styles.person__position}>Owner <span className={styles.person__company}>in Paul.com</span></span>
                <p className={styles.person__quotes}>
                Projects for many large domestic and foreign corporations, 
                enterprises in many elds such as nance, banking, F&B, education, communication.
                </p>
              </div>    
            </SwiperSlide >

            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes}/>
                <div className={styles.reviews__column__img}>
                  <img src={robert}/>
                </div>
                <span className={styles.person__name}>
          Robert
                </span>
                <span className={styles.person__position}>
          Founder <span className={styles.person__company}>in Apple inc.</span>
                </span>
                <p className={styles.person__quotes}>
          Founded in 2007, Sparch is specializing in 
          providing innovative services such as website design, 
          brand identity and marketing
                </p>
              </div>
            </SwiperSlide>  
            <SwiperSlide >
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes}/>
                <div className={styles.reviews__column__img}>
                  <img src={paul}/>
                </div>
                <span className={styles.person__name}>
                  Paul</span>
                <span className={styles.person__position}>Owner <span className={styles.person__company}>in Paul.com</span></span>
                <p className={styles.person__quotes}>
                Projects for many large domestic and foreign corporations, 
                enterprises in many elds such as nance, banking, F&B, education, communication.
                </p>
              </div>    
            </SwiperSlide >

            <SwiperSlide>
              <div className={styles.reviews__column}>
                <ImQuotesRight className={styles.quotes}/>
                <div className={styles.reviews__column__img}>
                  <img src={robert}/>
                </div>
                <span className={styles.person__name}>
          Robert
                </span>
                <span className={styles.person__position}>
          Founder <span className={styles.person__company}>in Apple inc.</span>
                </span>
                <p className={styles.person__quotes}>
          Founded in 2007, Sparch is specializing in 
          providing innovative services such as website design, 
          brand identity and marketing
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