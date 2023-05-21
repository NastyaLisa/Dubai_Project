import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styles from './Navbar.module.scss';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Navbar = ({ navbar }) => {
  const activeLink = `${styles.nav__list__link} ${styles.nav__list__link__active}`;
  const normalLink = `${styles.nav__list__link}`;

  const close = `${styles.nav__list}`;
  const open = `${styles.nav__list} ${styles.nav__list__open} `;

  const [isOpen, setIsOpen] = useState(false);
  const handleNavbarClick = (event) => {
    if (isOpen) {
      event.stopPropagation();
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.nav} onClick={handleNavbarClick}>
      <nav>
        <ul className={navbar ? open : close}>
          <div className={styles.box}>
            <li className={styles.menu}>
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <FormattedMessage id="header.buy" />
              </NavLink>
            </li>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.btn}>
              <AiOutlineCaretDown />
            </button>
          </div>
          <ul
            className={
              isOpen
                ? [styles.submenu, styles.active].join(' ')
                : [styles.submenu]
            }
          >
            <NavLink to="/apartment-category" onClick={() => setIsOpen(false)}>
              <li className={styles.submenu__link}>
                <FormattedMessage id="header.submenu1" />
              </li>
            </NavLink>
            <NavLink to="/apartment-category" onClick={() => setIsOpen(false)}>
              <li className={styles.submenu__link}>
                <FormattedMessage id="header.submenu2" />
              </li>
            </NavLink>
            <NavLink to="/apartment-category" onClick={() => setIsOpen(false)}>
              <li className={styles.submenu__link}>
                <FormattedMessage id="header.submenu3" />
              </li>
            </NavLink>
          </ul>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FormattedMessage id="header.blog" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FormattedMessage id="header.about" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FormattedMessage id="header.contacts" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
