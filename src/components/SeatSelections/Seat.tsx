"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'
import { PassengerSeat, RowElement } from './data'

enum seatAvailability{
    available,
    selected,
    seated
}

interface SeatProps {
  seatData: RowElement,
  activeSeats : PassengerSeat[]
  handleSelectSeats: (seatData: RowElement, activePassenger: number) => void
  activePassenger: number
}

const Seat = ({seatData, activeSeats, handleSelectSeats, activePassenger}:SeatProps) => {
  
  const [status, setStatus] = useState<seatAvailability>(seatAvailability.available)
  
  // const isSelected = activeSeats?.includes(seatData.seat_id)
  const isSelected = false

  const onClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    handleSelectSeats(seatData, activePassenger)
  }
  return (
    <div>
      {seatData.available? 
        (
        <div className={isSelected? styles["singleSeat-selected"] : styles["singleSeat"]} onClick={onClickHandler}>
          
        </div>
        ) : 
        (
          <div className={styles["singleSeat-not-available"]}>
            <div style={{color:"white", fontSize:"large"}}>
              X
            </div>
          </div>
        ) 
    }
    </div>
  )
}

export default Seat