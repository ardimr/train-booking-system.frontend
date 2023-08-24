import React from 'react'
import Seat from './Seat'
import styles from './styles.module.css'
import { PassengerSeat, RowElement } from './data'



interface props {
    rowElements: RowElement[]
    rowIndex: number
    handleSelectSeats: (seatData: RowElement, activePassenger: number) => void
    activeSeats: PassengerSeat[]
    activePassenger: number
}


const SeatRow: React.FC<props> = ({rowElements, rowIndex, handleSelectSeats, activeSeats, activePassenger}  :props) => {
    // const rowIndex = rowElements[0].seat_row
    
    
    return (
    <div className={styles.seatRow}>
        {
          rowElements.slice(0,2).map(
              (seatData, index) => ( <Seat seatData={seatData} key={index} activeSeats={activeSeats} handleSelectSeats={handleSelectSeats} activePassenger={activePassenger}/>)
        )}
        <div className={styles["row-index"]}>{rowIndex}</div>
        {
          rowElements.slice(2,4).map(
              (seatData, index) => ( <Seat seatData={seatData} key={index} activeSeats={activeSeats} handleSelectSeats={handleSelectSeats} activePassenger={activePassenger}/>)
        )}
    </div>
  )
}

export default SeatRow

// "row_elements": [
//     {
//         "seat_id": 1,
//         "seat_row": 1,
//         "seat_column": "A",
//         "seat_label": "EKS1-1A",
//         "available": false
//     },
//     {
//         "seat_id": 4,
//         "seat_row": 1,
//         "seat_column": "D",
//         "seat_label": "EKS1-1D",
//         "available": true
//     },
//     {
//         "seat_id": 3,
//         "seat_row": 1,
//         "seat_column": "C",
//         "seat_label": "EKS1-1C",
//         "available": false
//     },
//     {
//         "seat_id": 2,
//         "seat_row": 1,
//         "seat_column": "B",
//         "seat_label": "EKS1-1B",
//         "available": false
//     }
// ]