import styles from './styles.module.scss'
import Button from "@/components/Button";

export default function Service() {
  return (
    <div name="service"  className={styles.service}>
      <h2>\\ НАШИ УСЛУГИ</h2>
      <div className={styles.service_info}>
        <div className={styles.service_image}>
          <img src='service.png'/>
        </div>
        <div className={styles.service_level}>
          <h3>Повышаем уровень обслуживания</h3>
          <div className={styles.service_text_dots}>&#x2022; &#x2022; &#x2022;</div>
          <div>Наша компания существует для того, чтобы улучшить сервис Вашего заведения. Мы понимаем, что качество обслуживания - это трудоемкая и щепетильная работа, поэтому мы стараемся ее упростить. Делаем это блягодаря современным технологиям. Устанавливаем БЗУ - Беспроводное зарядное устройство и планшеты с электронным меню, не прибегая к изменениям интерьера. </div>
        </div>
      </div>
    </div>
  )
}