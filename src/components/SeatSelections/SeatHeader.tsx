import React from 'react'
import styles from './styles.module.css'

const SeatHeader = () => {
  const columnHeaders: string[] = ["A", "B", "", "C", "D"]

  return (
    <div className={styles["seat-header"]}>
      {columnHeaders.map((column, index) => (
        <div className={styles["seat-column"]} key={index}> {column} </div>
      ))}
    </div>
  )
}

export default SeatHeader