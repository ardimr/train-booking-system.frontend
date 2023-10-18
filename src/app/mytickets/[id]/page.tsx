"use client"
import RootLayout from '@/components/Layout/Layout'
import TicketDetails from '@/components/Tickets/TicketDetails'
import React from 'react'
import styles from './page.module.css'
const Page = ({ params }: { params: { id: number } }) => {
  return (
    <RootLayout>
      <div className={styles['container']}>
        <TicketDetails ticketID={params.id} />
      </div>
    </RootLayout>
  )
}

export default Page