"use client"
import React from 'react'
import SearchTickets from '@/components/SearchTickets/SearchTickets'
import TravelCard from '@/components/TravelCard/TravelCard'
import { QueryClientProvider, QueryClient } from 'react-query'
import RootLayout from '@/components/Layout/Layout'


const Search = () => {
  const queryClient = new QueryClient()

  return (
    <RootLayout>
      <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
          <QueryClientProvider client={queryClient}> 
            <SearchTickets/>
          </QueryClientProvider>
      </div>
    </RootLayout>
  )
}

export default Search
