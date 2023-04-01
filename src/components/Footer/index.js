import styles from './styles.module.scss'
import React from "react";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icon}>
        <img src='logo_white.svg'/>
        <div>Improvement<br/>Service</div>
      </div>
      <div className={styles.footer_info}>
        <h3>МЫ В СОЦ. СЕТЯХ</h3>
        <div className={styles.line}></div>
        <div className={styles.footer_sub}>Подпишитесь на нас в социальных сетях,<br/>чтобы увидеть больше. </div>
        <div className={styles.social}>
          <a href='#'><img src='insta.svg'/></a>
          <a href='#'><img src='telega.svg'/></a>
          <a href='#'><img src='vk.svg'/></a>
        </div>
        <div className={styles.footer_info_number}><a href="tel:+79313306062">+7 (931)-330-60-62</a></div>
        <div className={styles.footer_info_number}><a href="tel:+79219486085">+7 (921)-948-60-85</a></div>
      </div>
    </div>
  )
}