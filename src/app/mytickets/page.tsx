"use client"
import RootLayout from '@/components/Layout/Layout'
import Tickets from '@/components/Tickets/Tickets'
import React from 'react'
import styles from './page.module.css'

const MyTickets = () => {
  return (
    <RootLayout>
      <div className={styles['container']}>
        <Tickets />
      </div>
    </RootLayout>
  )
}

export default MyTickets