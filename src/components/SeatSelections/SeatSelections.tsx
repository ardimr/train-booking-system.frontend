import React from 'react'
import styles from './styles.module.css'
import SeatRow, { RowElement } from './SeatRow'

type SeatRow = {
    seat : RowElement[]
}

const SeatSelections = () => {
  const seatRows:SeatRow[] = [
    {seat: [
        {seatNumber: 1}, {seatNumber: 2}, {seatNumber: 3}, {seatNumber: 4}
        ]
    },
    { seat: [
        {seatNumber: 5}, {seatNumber: 6}, {seatNumber: 7}, {seatNumber: 8}
        ]
    }
  ]
    
  
  return (
    <div className={styles.seatSelection}>    
        {
            seatRows.map(
                (seatRow) => <SeatRow />
            )
        }
    </div>
  )
}

export default SeatSelections