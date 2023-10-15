"use client"
import RootLayout from '@/components/Layout/Layout'
import Tickets from '@/components/Tickets/Tickets'
import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const MyTickets = () => {
  return (
    <RootLayout>
       <QueryClientProvider client={queryClient}>
          <Tickets />
       </QueryClientProvider>
    </RootLayout>
  )
}

export default MyTickets