import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styles from './Navbar.module.scss';


const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  const activeLink = `${styles.nav__list__link} ${styles.nav__list__link__active}`;
  const normalLink = `${styles.nav__list__link}`;

  const active = `${styles.button__arrow} ${styles.active}`;
  const normal = `${styles.button__arrow}`;

  const close = `${styles.nav__list}`;
  const open = `${styles.nav__list} ${styles.nav__list__open} `;

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMenuToggle = (isSubmenuOpen) => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleSubmenuItemClick = () => {
    setIsSubmenuOpen(false);
  };

  return (
    // <div>
    <nav className={styles.nav}>
      <ul className={navbarOpen ? open : close}>
        {/* <ul className={styles.nav__list}> */}
        <li className={styles.nav__list__item}>
          <NavLink
            exact="true"
            to="/buy"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => setNavbarOpen(false)}
          >
            <FormattedMessage id="header.buy" />
          </NavLink>

          <button
            type="button"
            onClick={() => handleMenuToggle(isSubmenuOpen)}
            className={isSubmenuOpen ? active : normal}
          ></button>

          <ul
            className={
              isSubmenuOpen
                ? [styles.nav__submenu, styles.open].join(' ')
                : styles.nav__submenu
            }
          >
            <li className={styles.nav__submenu__link}>
              <NavLink
                exact="true"
                to="/apartment-category"
                onClick={() => {
                  handleSubmenuItemClick();
                  setNavbarOpen(false);
                }}
              >
                <FormattedMessage id="header.submenu1" />
              </NavLink>
            </li>
            <li className={styles.nav__submenu__link}>
              <NavLink
                exact="true"
                to="/apartment-category"
                onClick={() => {
                  handleSubmenuItemClick();
                  setNavbarOpen(false);
                }}
              >
                <FormattedMessage id="header.submenu2" />
              </NavLink>
            </li>
            <li className={styles.nav__submenu__link}>
              <NavLink
                exact="true"
                to="/apartment-category"
                onClick={() => {
                  handleSubmenuItemClick();
                  setNavbarOpen(false);
                }}
              >
                <FormattedMessage id="header.submenu3" />
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink
            exact="true"
            to="/blog"
            // aria-current="page"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => setNavbarOpen(false)}
          >
            <FormattedMessage id="header.blog" />
          </NavLink>
        </li>

        <li className={styles.nav__list__item}>
          <NavLink
            exact="true"
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => setNavbarOpen(false)}
          >
            <FormattedMessage id="header.about" />
          </NavLink>
        </li>

        <li className={styles.nav__list__item}>
          <NavLink
            exact="true"
            to="/contacts"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            onClick={() => setNavbarOpen(false)}
          >
            <FormattedMessage id="header.contacts" />
          </NavLink>
        </li>
      </ul>
    </nav>
    // </div>
  );
};

export default Navbar;
