"use client"
import React from 'react'
import SearchTickets from '@/components/SearchTickets/SearchTickets'
import TravelCard from '@/components/TravelCard/TravelCard'
import { QueryClientProvider, QueryClient } from 'react-query'


const Search = () => {
  const queryClient = new QueryClient()

  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <QueryClientProvider client={queryClient}> 
          <SearchTickets/>
        </QueryClientProvider>
    </div>
  )
}

export default Search
