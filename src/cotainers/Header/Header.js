import React, {useState} from 'react';
import Logo from '../../components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Button from 'component/Button/Button';
import Lang from './Lang/Lang';

import styles from './Header.module.scss';

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = ()=> {
  const [navbar, setNavbar] = useState(false);
  const active = `${styles.header__menu} ${styles.header__menu__active}`;
  const normal = `${styles.header__menu}`;
 
  return (
    <header className={styles.header}>
      <div className={styles.header__container} >
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className={navbar ? active: normal}>
          <Navbar navbar={navbar}/>
          
          <div className={styles.ui__components}>
            <Button navbar={navbar} />
            <Lang navbar={navbar}/>
            <div className={navbar? `${styles.contact__open}` : `${styles.contact}`}>
              <a className={styles.contact__link} href="tel:+99 (0) 344 956 4050">
              +99 (0) 344 956 4050</a>
            </div>
          </div>
         
        </div>
        <div onClick={() => setNavbar(!navbar)} className={styles.burger}>
          {navbar ? <AiOutlineClose/> : <AiOutlineMenu/>}
        
         
        </div>
      </div>
    </header>
   
  );
};

export default Header;