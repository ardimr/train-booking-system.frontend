import Seat from '@/components/SeatSelections/Seat'
import SeatRow from '@/components/SeatSelections/SeatRow'
import SeatSelections from '@/components/SeatSelections/SeatSelections'
import React from 'react'
import styles from './page.module.css'
const page = () => {
  return (
    <div className={styles["container"]}>
        <SeatSelections />

    </div>

  )
}

export default page