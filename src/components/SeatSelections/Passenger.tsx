import React from 'react'
import styles from './styles.module.css'
import { PassengerData, PassengerSeat } from './data'

interface PassengerProps {
  passengerNumber: number
  passengerSeat: PassengerSeat
  activePassenger: number
  handleActivePassenger: (passengerNumber: number) => void

}
const Passenger = ({passengerSeat,passengerNumber, activePassenger, handleActivePassenger}:PassengerProps) => {
  const isActive = activePassenger === passengerNumber
  const onClickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
    handleActivePassenger(passengerNumber)
  }
  return (
    <div className={isActive? styles["passenger-active"]: styles["passenger"]} onClick={onClickHandler}>
      <div className={styles["passenger-number"]}>
        {passengerNumber}
      </div>
      <div className={styles["passenger-info"]}>
        <div className={styles["passenger-name"]}>{passengerSeat.passengerData.name}</div>
        <div className={styles["passenger-seat"]}>{passengerSeat.seat?.seat_label}</div>
      </div>
    </div>
  )
}

export default Passenger