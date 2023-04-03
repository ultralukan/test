import React from 'react';
import styles from './styles.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollTo('About');
  };
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            О нас
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}>
            Услуги
          </Link>
        </li>
        <li>
          <Link to="profit" smooth={true} duration={500}>
            С нами комфортно
          </Link>
        </li>
      </ul>
    </nav>
  )
}