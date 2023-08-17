import React from 'react'
import Seat from './Seat'
import styles from './styles.module.css'

export type RowElement = {
    seatNumber: number
}

const SeatRow = () => {
    const seatRows:RowElement[] = [
        {seatNumber: 1},
        {seatNumber: 2},
        {seatNumber: 3},
        {seatNumber: 4}
    ]
    return (
    <div className={styles.seatRow}>
        {
        seatRows.slice(0,2).map(
            (seat) => ( <Seat />)
        )}
        {/* <Seat/> */}
        {
        seatRows.slice(2,4).map(
            (seat) => ( <Seat />)
        )
        }
    </div>
  )
}

export default SeatRow