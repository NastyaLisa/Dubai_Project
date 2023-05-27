import React, { useState, useEffect } from 'react';

import styles from './BlogPosts.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Grid, Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';


SwiperCore.use([Pagination, Autoplay, Grid, Navigation]);

const BlogPosts = () => {
  const [postsData, setPostsData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/blog')
      .then(response => response.json())
      .then(
        (result) => {
          setPostsData(result);
        },
        (error) =>{},
      );
  }, []);


  const renderBullet = (index, className) => {
    const postsDataLength = postsData.length;

    if (
      index < 3 ||
      index === postsDataLength - 2 ||
      index === postsDataLength - 1
    ) {
      return <span className={className}>{index + 1}</span>;
    } else if (index === 3) {
      return <span className={className}>...</span>;
    } else {
      return null;
    }
  };

  return (
    <section className={`${styles.blog} ${styles.container}`}>
      <h2 className={styles.blog__title}>Blog</h2>

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
          400: {
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
        {postsData.map((post, index) => (
          <SwiperSlide key={index}>
            <div className={styles.blog__card}>
              <div className={styles.blog__card__image}>
                <img src={`${post.image}`} alt={`illustration ${post.title}`} />
              </div>
              <div className={styles.blog__card__inform}>
                <h3 className={styles.inform__title}>{post.title}</h3>
                <p className={styles.inform__text}>{post.description}</p>
                <button className={styles.inform__btn}>
                  <a href="#">
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

export default BlogPosts;
