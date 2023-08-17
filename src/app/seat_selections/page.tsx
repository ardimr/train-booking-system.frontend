import Seat from '@/components/SeatSelections/Seat'
import SeatRow from '@/components/SeatSelections/SeatRow'
import SeatSelections from '@/components/SeatSelections/SeatSelections'
import React from 'react'

const page = () => {
  return (
    <div>
        <Seat />
        <div>
            Seat Rows
        </div>
        <SeatSelections />

    </div>

  )
}

export default page