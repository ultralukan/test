import styles from './styles.module.scss'

export default function Profit() {
  return (
    <div name="profit"  className={styles.profit}>
      <h2>\\ С НАМИ КОМФОРТНО</h2>
      <h3>
        Установка беспроводных встраиваемых зарядных устройств, в различных заведениях, будь то ресторан или бизнес центр, поможет:
      </h3>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='magnet.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Привлечь (гостей, клиентов) современными технологиями.</strong>Установка БЗУ поможет привлечь больше клиентов. Ваши посетители смогут без дополнительных действий зарядить телефон, просто положив его на стол.
        </div>
      </div>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='cloak.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Увеличить время пребывания (гостей, клиентов).</strong>Заряжая своё устройство, клиент проведет больше времени плодотворно, к примеру: наслаждаясь едой и напитками, не отвлекаясь на другие дела.
        </div>
      </div>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='medal.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Сформировать положительный имидж заведения.</strong>Установка БЗУ позволит улучшить качество сервиса, приятно удивить посетителей, тем самым положительно повлиять на имидж Вашего заведения.
        </div>
      </div>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='hand_hearth.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>С пониманием к Вам.</strong>Наши специалисты учтут все ваши пожелания и сделают работу качественно за короткое время.
        </div>
      </div>
    </div>
  )
}