import React, { useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Button from 'component/Button/Button';
import Lang from './Lang/Lang';

import styles from './Header.module.scss';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ onLanguageChange }) => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isNavbarOpen]);

  const active = `${styles.header__menu} ${styles.header__menu__active}`;
  const normal = `${styles.header__menu}`;

  const activeBurger = `${styles.burger} ${styles.burger__active}`;
  const normalBurger = `${styles.burger}`;



  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className={isNavbarOpen ? active : normal}>
          <Navbar navbarOpen={isNavbarOpen} setNavbarOpen={setIsNavbarOpen} />

          {/* {isNavbarOpen && (
            <div className={styles.header__ui__block}> */}
          <div
            className={
              isNavbarOpen
                ? `${styles.header__ui__block__open}`
                : `${styles.header__ui__block}`
            }
          >
            <Button navbarOpen={isNavbarOpen} />

            <Lang
              navbarOpen={isNavbarOpen}
              onLanguageChange={onLanguageChange}
            />
            <div
              className={
                isNavbarOpen
                  ? `${styles.contact__open}`
                  : `${styles.header__ui__block__contact}`
              }
            >
              <a
                className={styles.header__ui__block__contact__link}
                href="tel:+99 (0) 344 956 4050"
              >
                +99 (0) 344 956 4050
              </a>
            </div>
          </div>
          {/* )} */}
        </div>

        <button
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className={isNavbarOpen ? activeBurger : normalBurger}
        >
          {isNavbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
