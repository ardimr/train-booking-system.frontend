"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import SeatRow from './SeatRow'
import SeatColumn from './SeatHeader'
import { PassengerData, RowElement, passengers, seatRows } from './data'
import SeatHeader from './SeatHeader'
import Passenger from './Passenger'
import SeatLegends from './SeatLegends'
import Wagons from './Wagons'


const SeatSelections = () => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([])
  const [activePassenger, setActivePassenger] = useState<number>(0)
  
  const handleSelectSeat = (seatData: RowElement) => {
    setSelectedSeats([seatData.seat_id])
  }

  const handleActivePassenger = (passengerNumber: number) => {
    setActivePassenger(passengerNumber)
  }

  return (
    <div className={styles["seats-selection"]}>
      <div className={styles["passengers-container"]}>
        {passengers.map((passenger,index) => (
          <Passenger key={index} passengerData={passenger} passengerNumber={index+1} activePassenger={activePassenger} handleActivePassenger={handleActivePassenger}/>
        ))}
      </div>
      <div className={styles["seats-container"]}>
        <SeatLegends/>
        <Wagons />
        <div className={styles["seats-layout"]}>
          <SeatHeader />
          {
              seatRows.map(
                  (seatRow, index) =>  <SeatRow key={index} rowElements={seatRow.row_elements} rowIndex={index+1} activeSeats={selectedSeats} handleSelectSeats={handleSelectSeat}/>
              )
          }
          </div>
      </div>
    </div>
    
    
  )
}

export default SeatSelections

