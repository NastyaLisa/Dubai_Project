import React, { useState, useRef } from 'react';
import video from 'images/home/video.mp4';


import poster from 'images/home/poster.webp';
import play_button from 'images/svg/play_button.svg';
import styles from './Expertise.module.scss';
import { FormattedMessage } from 'react-intl';

const Expertise = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(prev => !prev);
    videoRef.current.play();
  };

  return (
    <section className={styles.expertise}>
      <div className={styles.container}>
        <div className={styles.expertise__quote}>
          <p className={styles.expertise__quote__subtitle}>
            <FormattedMessage id="expertise.quote.subtitle" />
          </p>
          <h2 className={styles.expertise__quote__title}>
            <FormattedMessage id="expertise.quote.title" />
          </h2>
          <blockquote className={styles.expertise__quote__content}>
            <FormattedMessage id="expertise.quote.content" />
          </blockquote>
        </div>

        <div className={styles.video}>
          <video
            ref={videoRef}
            src={video}
            controls={isPlaying}
            poster={poster}
            muted
            preload="metadata"
            playsInline={true}
          ></video>

          <button
            className={styles.btn__play}
            aria-label="Play video"
            onClick={handlePlayButtonClick}
            style={{ display: isPlaying ? 'none' : 'block' }}
          >
            <img src={play_button} alt="" />
          </button>
        </div>
        <div className={styles.quote}>
          <blockquote className={styles.quote__content}>
            <FormattedMessage id="quote.content"/>
            <span> - <FormattedMessage id="quote.author"/> </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
export default Expertise;



