import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'component/Logo/Logo';
import Button from 'component/Button/Button';


import styles from './Footer.module.scss';


// import Social from '../../components/Social/Social';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container} >
        <div className={styles.footer__logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className={styles.footer__grid}>
          <div className={styles.footer__grid__item}>
            <NavLink to="/buy">BUY
            </NavLink>
            <ul className={styles.footer__grid__list}>
              <li><NavLink to="/apartment-category">Apartment in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">House in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">Apartments in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">Loft in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">Apartments in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">Penthouse in Dubai</NavLink></li>
              <li><NavLink to="/apartment-category">Villa in Dubai</NavLink></li>
            </ul>
          </div>

          <div className={styles.footer__grid__item}>
            <NavLink to="/services">Services
            </NavLink>
            <ul className={styles.footer__grid__list}>
              <li>Property management in Dubai, UAE</li>
              <li>Sell property in Dubai, UAE</li>
              <li>Rent property in Dubai, UAE</li>
              <li>Investments in Dubai, UAE</li>
              <li>Real estate for cryptocurrency in Dubai</li>
              <li>Moving to Dubai, UAE</li>
            </ul>
          </div>

          <div className={styles.footer__grid__item}>
            <NavLink to="/">Information
            </NavLink>
            <ul className={styles.footer__grid__list}>
              <li>Video</li>
              <li>Podcasts</li>
              <li>Laws</li>
              <li>Questions and answers</li>
              <li>Books</li>
              <li>Articles</li>
            </ul>
          </div>

          <div className={styles.footer__grid__item}>
            <NavLink to="/about">About company
            </NavLink>
            <ul className={styles.footer__grid__list}>
              <li>Jobs</li>
              <li>Story</li>
              <li>Licenses</li>
              <li>Why are we</li>
              <li>Real estate agency</li>
            </ul>
          </div>

          <div className={styles.footer__grid__item}>
            <NavLink to="/contacts">Contact
            </NavLink>
            <address>
              <ul className={styles.footer__grid__list}>
                <li>964 Worthington Drive<br />
                  Dubai, UAE</li>
                <li>dubairealty@mail.com</li>
                <li><Button /></li>
              </ul>
            </address>
          </div>

        </div>

        <div className={styles.copyright}>
          <div>Copyright © 2023 Dubai Realty</div>

                   
          {/* <Social className="social social__footer" /> */}
        </div>
      </div>
    </footer>

  );
};

export default Footer;