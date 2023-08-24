import React from 'react'
import styles from './styles.module.css'
import { PassengerData } from './data'

interface PassengerProps {
  passengerNumber: number
  passengerData: PassengerData
  activePassenger: number
  handleActivePassenger: (passengerNumber: number) => void

}
const Passenger = ({passengerData,passengerNumber, activePassenger, handleActivePassenger}:PassengerProps) => {
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
        <div className={styles["passenger-name"]}>{passengerData.name}</div>
        <div className={styles["passenger-seat"]}>EXEC-1/3A</div>
      </div>
    </div>
  )
}

export default Passenger