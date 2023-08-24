"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import SeatRow from './SeatRow'
import SeatColumn from './SeatHeader'
import { PassengerData, PassengerSeat, RowElement, passengerSeats, passengers, seatRows } from './data'
import SeatHeader from './SeatHeader'
import Passenger from './Passenger'
import SeatLegends from './SeatLegends'
import Wagons from './Wagons'
import PrimaryButton from '../Button/primary_button'


const SeatSelections = () => {
  const [selectedSeats, setSelectedSeats] = useState<PassengerSeat[]>(passengerSeats)
  const [activePassenger, setActivePassenger] = useState<number>(1)
  
  const handleSelectSeat = (seatId: number, activePassenger:number) => {

    setSelectedSeats(
      selectedSeats.map((passengerSeat) => 
      passengerSeat.passengerNumber === activePassenger
        ? {...passengerSeat, seatId:seatId }
        : {...passengerSeat}
      )
    )
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
      <div style={{display:"flex", flexDirection:"column"}}>
        <div className={styles["seats-container"]}>
          <SeatLegends/>
          <Wagons />
          <div className={styles["seats-layout"]}>
            <SeatHeader />
            {
                seatRows.map(
                    (seatRow, index) =>  <SeatRow key={index} rowElements={seatRow.row_elements} rowIndex={index+1} activeSeats={selectedSeats} handleSelectSeats={handleSelectSeat} activePassenger={activePassenger}/>
                )
            }
          </div>
        </div>
        <div className={styles["button"]}>
          <PrimaryButton disabled={false} > Done </PrimaryButton>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default SeatSelections

