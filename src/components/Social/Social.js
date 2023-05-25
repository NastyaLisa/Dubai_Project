import React from 'react';
import './Social.scss';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';

const Social = ({ className }) => {
  return (
    <div className={`social ${className}`}>
      <ul className="social__list">
        <li className="social__list__item">
          <a href="https://www.facebook.com/dybai-real-estate">
            <FaFacebookF />
          </a>
        </li>

        <li className="social__list__item">
          <a href='"https://twitter.com/dybai-real-estate"'>
            <AiOutlineTwitter />
          </a>
        </li>

        <li className="social__list__item">
          <a href="https://www.youtube.com/dybai-real-estate">
            <ImYoutube />
          </a>
        </li>

        <li className="social__list__item">
          <a href="https://www.instagram.com/dybai-real-estate">
            <RiInstagramFill />
          </a>
        </li>

        <li className="social__list__item">
          <a href="https://www.linkedin.com/company/dybai-real-estate">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
