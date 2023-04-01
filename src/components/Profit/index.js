import styles from './styles.module.scss'

export default function Profit() {
  return (
    <div name="profit"  className={styles.profit}>
      <h2>\\ С НАМИ ВЫГОДНО</h2>
      <h3>
        Установка беспроводных встраиваемых зарядных устройств, в различных заведениях, будь то ресторан или бизнес центр, поможет:
      </h3>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='magnet.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Привлечь (гостей, клиентов) современными технологиями.</strong> В настоящее время большинство людей используют мобильные устройства, и постоянно нуждаются в их подзарядке. Установка беспроводного зарядного устройства может привлечь больше клиентов в ваше заведение, так как при нахождении они смогут без каких-либо дополнительных действий и проводов, зарядить телефон просто положив его на стол.
        </div>
      </div>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='cloak.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Увеличить  время пребывания (гостей, клиентов).</strong> Заряжая свои устройства, они могут провести больше времени плодотворно, в вашем заведении, к примеру: наслаждаясь едой и напитками, не отвлекаясь на другие дела.
        </div>
      </div>
      <div className={styles.profit_point}>
        <div className={styles.profit_icon}>
          <img src='medal.svg'/>
        </div>
        <div>
          <div className={styles.line}></div>
          <strong>Сформировать положительный имидж заведения.</strong> Установка беспроводного зарядного устройства создает положительное впечатление на (гостей, клиентов) и помогает усилить имидж вашего заведения - как современного и инновационного.
        </div>
      </div>
    </div>
  )
}