import styles from './styles.module.scss'
import Button from "@/components/Button";

export default function About() {
  return (
    <div name="about"  className={styles.about}>
      <h2>\\ КОРОТКО О НАС</h2>
      <div className={styles.about_info}>
        <div className={styles.about_image}>
          <img src='about.png'/>
        </div>
        <div className={styles.about_text}>
          <div className={styles.about_level}>
            <h3>Повышаем уровень обслуживания</h3>
            <div className={styles.about_text_dots}>&#x2022; &#x2022; &#x2022;</div>
            <div>Наша компания существует для того, чтобы улучшить сервис Вашего заведения. Мы понимаем, что качество обслуживания - это трудоемкая и щепетильная работа, поэтому мы стараемся ее упростить. Делаем это блягодаря современным технологиям. Устанавливаем БЗУ - Беспроводное зарядное устройство и планшеты с электронным меню, не прибегая к изменениям интерьера. </div>
          </div>
          <div className={styles.about_qualities}>
            <div className={styles.about_card}>
              <div className={styles.about_icon}>
                <img src='hands.svg'/>
              </div>
              <h3>Золотые руки</h3>
              <div className={styles.about_card_text}>Вся работа будет выполнена профессионалами. А так же эксперт предложит несколько вариантов установки.</div>
            </div>
            <div className={styles.about_card}>
              <div className={styles.about_icon}>
                <img src='medal.svg'/>
              </div>
              <h3>Деликатность<br/>и красота</h3>
              <div className={styles.about_card_text}>Аккуратный монтаж. Интерьер не меняется. Перестановка мебели не производится, все остается на своих местах. Появится только маленькая, информирующая метка на столе.</div>
            </div>
          </div>
        </div>
      </div>
      <Button/>
    </div>
  )
}