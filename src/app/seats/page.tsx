"use client"

import Seat from '@/components/SeatSelections/Seat'
import SeatRow from '@/components/SeatSelections/SeatRow'
import SeatSelections from '@/components/SeatSelections/SeatSelections'
import React from 'react'
import styles from './page.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const page = () => {
  const queryClient = new QueryClient()
  return (
    <div className={styles["container"]}>
        <QueryClientProvider client={queryClient}>
          <SeatSelections />
        </QueryClientProvider>

    </div>

  )
}

export default page