"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'

enum seatAvailability{
    available,
    selected,
    seated
}
const Seat = () => {
  const [status, setStatus] = useState<seatAvailability>(seatAvailability.available)
 
  return (
    <div className={styles.singleSeat}>
        <p></p>
    </div>
  )
}

export default Seat