import React, { useState,useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Logo from 'component/Logo/Logo';
import Button from 'component/Button/Button';

import styles from './Footer.module.scss';

const Footer = () => {
  const [subMenuStates, setSubMenuStates] = useState({
    isBuySubMenuOpen: false,
    isServicesSubMenuOpen: false,
    isInformationSubMenuOpen: false,
    isCompanySubMenuOpen: false,
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх при изменении маршрута
  }, [location]);

  const toggleSubMenu = (subMenu) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [subMenu]: !prevState[subMenu],
    }));
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        {/* <div className={styles.footer__list}> */}
        <div className={styles.footer__menu}>
          <ul className={styles.footer__menu__list}>
            {/* BUY        */}
            <li className={styles.footer__menu__link}>
              <NavLink to="/buy">
                <FormattedMessage id="footer.buy" />
              </NavLink>
              <button
                onClick={() => toggleSubMenu('isBuySubMenuOpen')}
                className={`${styles.button__arrow} ${
                  subMenuStates.isBuySubMenuOpen ? styles.active : ''
                }`}
              ></button>
              <ul
                className={`${styles.footer__submenu__list} ${
                  subMenuStates.isBuySubMenuOpen ? styles.open : ''
                }`}
              >
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu1" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu2" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu3" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    {' '}
                    <FormattedMessage id="footer.buy.submenu4" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu3" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu5" />
                  </NavLink>
                </li>
                <li className={styles.footer__submenu__link}>
                  <NavLink to="/apartment-category">
                    <FormattedMessage id="footer.buy.submenu6" />
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Services */}
            <li className={styles.footer__menu__link}>
              <NavLink to="/services">
                <FormattedMessage id="footer.services" />
              </NavLink>
              <button
                onClick={() => toggleSubMenu('isServicesSubMenuOpen')}
                className={`${styles.button__arrow} ${
                  subMenuStates.isServicesSubMenuOpen ? styles.active : ''
                }`}
              ></button>
              <ul
                className={`${styles.footer__submenu__list} ${
                  subMenuStates.isServicesSubMenuOpen ? styles.open : ''
                }`}
              >
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu1" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu2" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu3" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu4" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu5" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.services.submenu6" />
                </li>
              </ul>
            </li>

            {/* Information */}

            <li className={styles.footer__menu__link}>
              <NavLink to="/">
                <FormattedMessage id="footer.inform" />
              </NavLink>
              <button
                onClick={() => toggleSubMenu('isInformationSubMenuOpen')}
                className={`${styles.button__arrow} ${
                  subMenuStates.isInformationSubMenuOpen ? styles.active : ''
                }`}
              ></button>
              <ul
                className={`${styles.footer__submenu__list} ${
                  subMenuStates.isInformationSubMenuOpen ? styles.open : ''
                }`}
              >
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu1" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu2" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu3" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu4" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu5" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.inform.submenu6" />
                </li>
              </ul>
            </li>

            {/* About company */}
            <li className={styles.footer__menu__link}>
              <NavLink to="/about">
                <FormattedMessage id="footer.about" />
              </NavLink>
              <button
                onClick={() => toggleSubMenu('isCompanySubMenuOpen')}
                className={`${styles.button__arrow} ${
                  subMenuStates.isCompanySubMenuOpen ? styles.active : ''
                }`}
              ></button>
              <ul
                className={`${styles.footer__submenu__list} ${
                  subMenuStates.isCompanySubMenuOpen ? styles.open : ''
                }`}
              >
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.about.submenu1" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.about.submenu2" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.about.submenu3" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.about.submenu4" />
                </li>
                <li className={styles.footer__submenu__link}>
                  <FormattedMessage id="footer.about.submenu5" />
                </li>
              </ul>
            </li>

            {/* Contact< */}
            <li className={styles.footer__menu__link}>
              <NavLink to="/contacts">
                <FormattedMessage id="footer.contacts" />
              </NavLink>
              <address>
                <ul className={styles.footer__contact__list}>
                  <li className={styles.footer__contact__link}>
                    <FormattedMessage id="footer.contacts.address" />
                  </li>
                  <li className={styles.footer__contact__link}>
                    dubairealty@mail.com
                  </li>
                  <li className={styles.footer__contact__link}>
                    <Button className={styles.btn__footer} />
                  </li>
                </ul>
              </address>
            </li>
          </ul>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__text}>
            <p>© 2023 Dubai Realty</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
