import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
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
                BUY
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
              <li className={styles.submenu__link}>Category number one </li>
            </NavLink>
            <NavLink to="/apartment-category" onClick={() => setIsOpen(false)}>
              <li className={styles.submenu__link}>Apartments in Dubai</li>{' '}
            </NavLink>
            <NavLink to="/apartment-category" onClick={() => setIsOpen(false)}>
              <li className={styles.submenu__link}>
                Category number twenty five
              </li>
            </NavLink>
          </ul>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              BLOG
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              CONTACTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
