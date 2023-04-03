import styles from './styles.module.scss'
import Button from "@/components/Button";

export default function About() {
  return (
    <div name="about"  className={styles.about}>
      <h2>\\ О НАС</h2>
      <div className={styles.about_info}>
        <div className={styles.about_image}>
          <img src='about.png'/>
        </div>
        <div className={styles.about_text}>
          <div className={styles.about_level}>
            <h3>Повышаем уровень обслуживания</h3>
            <div className={styles.about_text_dots}>&#x2022; &#x2022; &#x2022;</div>
            <div className={styles.text}>Improvement Service существует для того, чтобы улучшить сервис Вашего заведения. Мы понимаем, что качество обслуживания - это трудоемкий процесс, поэтому мы стараемся его упростить. Наша компания устанавливает БЗУ - беспроводное зарядное устройство, а также планшеты с электронным меню, без деформации интерьера Вашего заведения.</div>
            <div className={styles.btn}>
              <Button/>
            </div>
          </div>
          {/*<div className={styles.about_qualities}>*/}
          {/*  <div className={styles.about_card}>*/}
          {/*    <div className={styles.about_icon}>*/}
          {/*      <img src='hands.svg'/>*/}
          {/*    </div>*/}
          {/*    <h3>Золотые руки</h3>*/}
          {/*    <div className={styles.about_card_text}>Вся работа будет выполнена профессионалами. А так же эксперт предложит несколько вариантов установки.</div>*/}
          {/*  </div>*/}
          {/*  <div className={styles.about_card}>*/}
          {/*    <div className={styles.about_icon}>*/}
          {/*      <img src='medal.svg'/>*/}
          {/*    </div>*/}
          {/*    <h3>Деликатность<br/>и красота</h3>*/}
          {/*    <div className={styles.about_card_text}>Аккуратный монтаж. Интерьер не меняется. Перестановка мебели не производится, все остается на своих местах. Появится только маленькая, информирующая метка на столе.</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}