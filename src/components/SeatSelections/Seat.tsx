"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'

enum seatAvailability{
    available,
    selected,
    seated
}

interface SeatProps {
  rowIndex: number
}
const Seat = () => {
  const [status, setStatus] = useState<seatAvailability>(seatAvailability.available)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  
  const handleOnSelect = () => {
    setIsSelected(true)
  }
  return (
    <div className={isSelected? styles["singleSeat-selected"] : styles["singleSeat"]} onClick={handleOnSelect}>
        <p>{isSelected}</p>
    </div>
  )
}

export default Seat