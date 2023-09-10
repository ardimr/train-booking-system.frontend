"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'
import { PassengerSeat, RowElement } from './data'
import { PassengerData } from '@/models/passenger'

enum seatAvailability{
    available,
    selected,
    seated
}

interface SeatProps {
  seatData: RowElement,
  activeSeats : PassengerData[]
  activePassenger: number
  handleSelectSeats: (seat: RowElement, activePassenger:number) => void
}

const Seat = ({seatData, activeSeats, handleSelectSeats, activePassenger}:SeatProps) => {
    
  const passengerSeat = activeSeats.find((passengerSeat) => {return passengerSeat.seat?.seatId === seatData.seat_id})

  const onClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    handleSelectSeats(seatData, activePassenger)
  }
  
  return (
    <div>
      {!seatData.available
      ? (
          <div className={styles["singleSeat-not-available"]}>
            <div style={{color:"white", fontSize:"large"}}>
              X
            </div>
          </div>
      ) 
      : (
        passengerSeat !== undefined
        ? <div className={styles["singleSeat-selected"]}> {passengerSeat.passengerNumber}</div>
        : <div className={styles["singleSeat"]} onClick={onClickHandler} />
         
      )    
    }
   </div>
  )
}

export default Seat