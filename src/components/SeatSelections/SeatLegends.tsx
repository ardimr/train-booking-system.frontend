import React from 'react'
import styles from './styles.module.css'

const SeatLegends = () => {
  return (
    <div className={styles["seat-legends-container"]}>
      
      <div className={styles["seat-legend"]}>
        <div className={styles["seat-legend-box-available"]}/>
        <p>Available</p>
      </div>
      

      <div className={styles["seat-legend"]}>
        <div className={styles["seat-legend-box-selected"]}/>
        <p>Selected</p>
      </div>

      <div className={styles["seat-legend"]}>
        <div className={styles["seat-legend-box-not-available"]}>
          X
        </div>
        <p>Not Available</p>
      </div>

    </div>
    
  )
}

export default SeatLegends