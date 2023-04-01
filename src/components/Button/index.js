import styles from './styles.module.scss'
import React, {useState} from 'react';
import Modalk from '../Modalk/index'

export default function Button() {

  const [modal, setModal] = useState(false)

  return (
    <div className={styles.button}>
      <a onClick={() => setModal(!modal)}>
        ОФОРМИТЬ ЗАЯВКУ СЕЙЧАС
      </a>
      <Modalk
        open={modal}
        onClose={() => setModal(false)}
      />
    </div>
  )
}