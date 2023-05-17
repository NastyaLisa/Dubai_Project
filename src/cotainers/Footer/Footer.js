import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'component/Logo/Logo';
import Button from 'component/Button/Button';

import styles from './Footer.module.scss';

// import Social from '../../components/Social/Social';


const Footer = () => {
  const [buyMenuOpen, setBuyMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [informationMenuOpen, setInformationMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  
  const handleBuyMenuClick = () => {
    setBuyMenuOpen(!buyMenuOpen);
  };

  const handleInformationMenuClick = () => {
    setInformationMenuOpen(!informationMenuOpen);
  };
  const handServicesMenuOpenClick = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  const handAboutMenuOpenClick = () => {
    setAboutMenuOpen(!aboutMenuOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container} >
        <div className={styles.footer__logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className={styles.footer__grid}>
         
          <div className={styles.footer__grid__items}>
         
            <NavLink to="/buy">BUY</NavLink>
            <button 
              onClick={handleBuyMenuClick}
              className={styles.mobile_only}
            >
              {buyMenuOpen ? '-' : '+'}
            </button>
         
            <ul className={`${styles.footer__grid__list} ${buyMenuOpen ? styles.show : styles.hide}`}>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Apartment in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">House in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Apartments in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Loft in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Apartments in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Penthouse in Dubai</NavLink></li>
              <li className={styles.footer__grid__link}><NavLink to="/apartment-category">Villa in Dubai</NavLink></li>
            </ul>
         
          </div>
    
          
          <div className={styles.footer__grid__items}>
            <NavLink to="/services">Services</NavLink>
            <button 
              onClick={handServicesMenuOpenClick}
              className={styles.mobile_only}
            >
              {servicesMenuOpen ? '-' : '+'}
            </button>
            <ul className={`${styles.footer__grid__list} ${servicesMenuOpen ? styles.show : styles.hide}`}>
            
              <li className={styles.footer__grid__link}>Property management in Dubai, UAE</li>
              <li className={styles.footer__grid__link}>Sell property in Dubai, UAE</li>
              <li className={styles.footer__grid__link}>Rent property in Dubai, UAE</li>
              <li className={styles.footer__grid__link}>Investments in Dubai, UAE</li>
              <li className={styles.footer__grid__link}>Real estate for cryptocurrency in Dubai</li>
              <li className={styles.footer__grid__link}>Moving to Dubai, UAE</li>
            </ul>
          </div>

          <div className={styles.footer__grid__items}>
            <NavLink to="/">Information</NavLink>
            <button 
              onClick={handleInformationMenuClick}
              className={styles.mobile_only}
            >
              {informationMenuOpen ? '-' : '+'}
            </button>
            <ul className={`${styles.footer__grid__list} ${informationMenuOpen ? styles.show : styles.hide}`}>
            
            
              <li className={styles.footer__grid__link}>Video</li>
              <li className={styles.footer__grid__link}>Podcasts</li>
              <li className={styles.footer__grid__link}>Laws</li>
              <li className={styles.footer__grid__link}>Questions and answers</li>
              <li className={styles.footer__grid__link}>Books</li>
              <li className={styles.footer__grid__link}>Articles</li>
            </ul>
          </div>

          <div className={styles.footer__grid__items}>
            <NavLink to="/about">About company</NavLink>
            <button 
              onClick={handAboutMenuOpenClick}
              className={styles.mobile_only}
            >
              {aboutMenuOpen ? '-' : '+'}
            </button>
            <ul className={`${styles.footer__grid__list} ${aboutMenuOpen ? styles.show : styles.hide}`}>
            
            
              <li className={styles.footer__grid__link}>Jobs</li>
              <li className={styles.footer__grid__link}>Story</li>
              <li className={styles.footer__grid__link}>Licenses</li>
              <li className={styles.footer__grid__link}>Why are we</li>
              <li className={styles.footer__grid__link}>Real estate agency</li>
            </ul>
          </div>

          <div className={styles.footer__grid__items}>
            <NavLink to="/contacts">Contact
            </NavLink>
            <address>
              <ul className={styles.footer__grid__list}>
                <li className={styles.footer__grid__link}>964 Worthington Drive<br />
                  Dubai, UAE</li>
                <li className={styles.footer__grid__link}>dubairealty@mail.com</li>
                <li className={styles.footer__grid__link}><Button /></li>
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