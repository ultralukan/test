import React, {useEffect, useState} from 'react';
import { Modal,Box, Typography } from '@mui/material';
import styles from './styles.module.scss'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function Modalk({open, onClose}) {

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(false)
    setName('')
    setTel('')
    setEmail('')
    setMessage('')

    let data = {
      name,
      email,
      tel,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setSent(true)
      }
    })
  }

  const handleSent = () => {
    setSent(false)
    onClose()
  }

  useEffect(() => {
    if (sent) {
      setTimeout(handleSent, 5000)
    }
  }, [sent])


  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.modal}
    >
      <Box className={styles.box}>
          <HighlightOffIcon onClick={onClose} className={styles.close} />
        {
          !sent ?
          (<div className={styles.form}>
            <h2>Форма обратной связи</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" id="name" placeholder='Ваше имя или организация' value={name} onChange={(e) => setName(e.target.value)} />
              <input type="tel" id="tel" required placeholder='Номер телефона*' value={tel} onChange={(e) => setTel(e.target.value)} />
              <input type="email" id="email" required placeholder='Email *' value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea id="message" value={message} placeholder='Комментарий' onChange={(e) => setMessage(e.target.value)}/>
              <div className={styles.button}>
                <a type='submit'>
                  <button type='submit'>
                    ОСТАВИТЬ ЗАЯВКУ
                  </button>
                </a>
              </div>
            </form>
            <div className={styles.icon}>
              <img src='logo_white.svg'/>
            </div>
          </div>):
            (<div className={styles.ready}>
              <div className={styles.icon_ready}>
                <img src='ready.svg'/>
              </div>
              <div className={styles.thx}>
                Спасибо!<br/>
                Мы с вами свяжемся в ближайшее время
              </div>
              <div className={styles.icon_ready_logo}>
                <img src='logo_white.svg'/>
              </div>
            </div>)
        }
      </Box>
    </Modal>
  )
}