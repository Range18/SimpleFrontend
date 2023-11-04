import React from 'react'
import styles from './Button.module.scss'

export const Button = ({children}) => {
  return (
    <button className={styles.button} >{children}</button>
  )
}
