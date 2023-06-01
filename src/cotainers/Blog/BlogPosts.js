import React, { useState, useEffect } from 'react';
import styles from './BlogPosts.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { FormattedMessage,useIntl } from 'react-intl';


SwiperCore.use([Pagination, Grid, Navigation]);

const BlogPosts = () => {
  const intl = useIntl();
  const [postsData, setPostsData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/blog');
        const result = await response.json();
        setPostsData(result);
        setFilteredPosts(result);
      } catch (error) {
        console.error('Error from data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredPosts = postsData.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchQuery) ||
        post.description.toLowerCase().includes(searchQuery)
      );
    });
    setFilteredPosts(filteredPosts);
    setSearchValue(searchQuery);
  };

  return (
    <section className={`${styles.blog} ${styles.container}`}>
      <div className={styles.blog__header}>
        <h2 className={styles.blog__header__title}>
          <FormattedMessage id="blog.title" />
        </h2>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
          placeholder={intl.formatMessage({
            id: 'blog.search',
          })}
          className={styles.blog__header__searchInput}
        />
      </div>
      {filteredPosts.length > 0 ? (
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
                rows: 3,
                fill: 'row',
              },
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 4,
                fill: 'row',
              },
            },
          }}
          initialSlide={0}
          loop={true}
          pagination={{
            clickable: true,
            bulletActiveClass: `${styles.paginationItemActive}`,
            bulletClass: `${styles.paginationBullet}`,
            el: `.${styles.paginationWrapper}`,
          }}
          navigation={{
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          }}
          className={`.${styles.slider}`}
        >
          {filteredPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className={styles.blog__card}>
                <div className={styles.blog__card__image}>
                  <img src={post.image} alt={`illustration ${post.title}`} />
                </div>
                <div className={styles.blog__card__inform}>
                  <h3 className={styles.inform__title}>{post.title}</h3>
                  <p className={styles.inform__text}>{post.description}</p>
                  <button>
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
      ) : (
        <p className={styles.loading}>Page Loading from the server...</p> // Отображение загрузки, пока данные не получены
      )}
    </section>
  );
};

export default BlogPosts;
