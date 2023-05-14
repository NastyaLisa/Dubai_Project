import React, { useState, useRef } from 'react';
import video from 'images/home/video.mp4';


import poster from 'images/home/poster.webp';
import play_button from 'images/svg/play_button.svg';
import styles from './Expertise.module.scss';

const Expertise = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    setIsPlaying(prev => !prev);
    videoRef.current.play();
  };

  return (
    <section className={styles.expertise}>

      <div className={styles.expertise__quote}>
        <p className={styles.expertise__quote__subtitle} >Our expertise</p>
        <h2 className={styles.expertise__quote__title}>
          &ldquo;The best apartment in&nbsp;Dubai&ldquo; we&nbsp;will find your dream
        </h2>
        <blockquote className={styles.expertise__quote__content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut&nbsp;libero&nbsp;id,
          blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In&nbsp;efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac&nbsp;elit commodo finibus in&nbsp;nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu&nbsp;tincidunt. Aliquam varius varius tortor. Cras id&nbsp;venenatis sem. Quisque ut&nbsp;risus&nbsp;ex. Sed et&nbsp;tempor massa. Praesent ac&nbsp;eros hendrerit, congue justo&nbsp;ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a&nbsp;lorem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
          // autoPlay={isPlaying}

        >

        </video>

        <button
          className={styles.btn__play}
          aria-label="Play video"
          onClick={handlePlayButtonClick}
          // onClick={() => {  setIsPlaying(true); }}
          style={{ display: isPlaying ? 'none' : 'block' }}
        >
          <img src={play_button} alt="" />
        </button>

      </div>
      <div className={styles.quote}>

        <blockquote className={styles.quote__content}>
          &ldquo;Don`t limit yourself. Many people limit themselves to&nbsp;what they think they can&nbsp;do.
          You can go&nbsp;as&nbsp;far as&nbsp;your mind lets you.
          What you believe, remember, you can achieve.&ldquo;&nbsp;<span>&mdash; Mary Kay Ash</span>

        </blockquote>
      </div>

    </section>

  );
};
export default Expertise;



