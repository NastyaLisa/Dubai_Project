import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import styles from './Navbar.module.scss';

const Navbar = ({ navbar }) => {
  const activeLink = `${styles.nav__list__link} ${styles.nav__list__link__active}`;
  const normalLink = `${styles.nav__list__link}`;

  const close = `${styles.nav__list}`;
  const open = `${styles.nav__list} ${styles.nav__list__open} `;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <nav>
        <ul className={navbar ? open : close}>
          <li className={styles.menu}>
            <NavLink
              to="/buy"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => setIsOpen(!isOpen)}
            >
              BUY
              {/* <ul className={`${navbar ? open : close} ${styles.submenu}}`}> */}
              {isOpen && (
                <ul className={styles.submenu}>
                  <NavLink to="/apartment-category">
                    <li className={styles.submenu__link}>Category number one </li>
                  </NavLink>
                  <NavLink to="/apartment-category">
                    <li className={styles.submenu__link}>Apartments in Dubai</li>{' '}
                  </NavLink>
                  <NavLink to="/apartment-category">
                    <li className={styles.submenu__link}>
                    Category number twenty five
                    </li>
                  </NavLink>
                </ul>
              )}
            </NavLink>
          </li>
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