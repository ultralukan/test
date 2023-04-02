import Navbar from "@/components/Banner/Navbar";
import styles from './styles.module.scss'
import Button from "@/components/Button";
import React from "react";

export default function Stages() {
  return (
    <div className={styles.stages}>
      <div className={styles.stages_work}>
        <h2>Этапы работы</h2>
        <ul>
          <li>Знакомство</li>
          <li>Делаем замеры и обговариваем детали</li>
          <li>Установка</li>
        </ul>
      </div>
      <div className={styles.aside}>
        <div className={styles.stages_info}>
          <div className={styles.stages_info_comment}>Позвоните нам или оставьте заявку на сайте</div>
          <div className={styles.stages_info_comment}>Мы перезвоним вам в течении 10 минут</div>
          <div className={styles.numbers}>
            <div className={styles.stages_info_number}><a href="tel:+79313306062">+7 (931)-330-60-62</a></div>
            <div className={styles.stages_info_number}><a href="tel:+79219486085">+7 (921)-948-60-85</a></div>
          </div>
        </div>
        <div className={styles.btn}>
          <Button />
        </div>
      </div>
    </div>
  )
}