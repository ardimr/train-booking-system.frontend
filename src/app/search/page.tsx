"use client"
import React, { Suspense } from 'react'
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
            <div style={{marginTop:"20px"}}/>
            <Suspense fallback={<div>Loading Search Form</div>} >
              <SearchTickets/>
            </Suspense>
          </QueryClientProvider>
      </div>
    </RootLayout>
  )
}

export default Search
