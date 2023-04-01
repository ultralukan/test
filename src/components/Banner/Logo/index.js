import React from 'react';
import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src='logo.svg'/>
      <div>Improvement<br/>Service</div>
    </div>
  )
}