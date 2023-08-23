import React from 'react'
import Seat from './Seat'
import styles from './styles.module.css'

export type RowElement = {
    seat_id: number
    seat_row: number
    seat_column: string
    seat_label: string
    available: boolean
}

interface props {
    rowElements: RowElement[]
    rowIndex: number
}

// const seatRows:RowElement[] = [
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

const SeatRow: React.FC<props> = ({rowElements, rowIndex} :props) => {
    // const rowIndex = rowElements[0].seat_row
    return (
    <div className={styles.seatRow}>
        {
        rowElements.slice(0,2).map(
            (seat) => ( <Seat />)
        )}
        <div className={styles["row-index"]}>{rowIndex}</div>
        {
        rowElements.slice(2,4).map(
            (seat) => ( <Seat />)
        )
        }
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