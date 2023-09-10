import React from 'react'
import SeatHeader from './SeatHeader'
import SeatRow from './SeatRow'
import { PassengerSeat, RowElement, SeatRowData } from './data'
import styles from './styles.module.css'
import { PassengerData } from '@/models/passenger'
interface props {
  seatRows: SeatRowData[]
  passengerSeats: PassengerData[]
  activePassenger: number
  handleSelectSeat: (seat: RowElement, activePassenger: number) => void
}
const SeatsLayout = ({seatRows, passengerSeats, handleSelectSeat, activePassenger}:props) => {
  return (
    <div className={styles["seats-layout"]}>
      <SeatHeader />
      {
          seatRows.map(
              (seatRow, index) =>  <SeatRow key={index} rowElements={seatRow.row_elements} rowIndex={index+1} activeSeats={passengerSeats} handleSelectSeats={handleSelectSeat} activePassenger={activePassenger}/>
          )
      }
    </div>
  )
}

export default SeatsLayout