import React from 'react'
import styles from './styles.module.css'
import SeatRow, { RowElement } from './SeatRow'
import SeatColumn from './SeatColumn'
import { seatRows } from './data'
export type SeatRow = {
    row_elements : RowElement[]
}



const SeatSelections = () => {
  
  return (
    <div className={styles.seatSelection}>

        <SeatColumn />
 
        {
            seatRows.map(
                (seatRow, index) =>  <SeatRow key={index} rowElements={seatRow.row_elements} rowIndex={index+1}/>
            )
        }
    </div>
  )
}

export default SeatSelections

