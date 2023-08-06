import React from 'react'
import SearchTickets from '@/components/SearchTickets/SearchTickets'
import TravelCard from '@/components/TravelCard/TravelCard'
const home = () => {
  return (
    <div>
        <SearchTickets />
        <div style={{height:'50px'}} />
        <TravelCard />
    </div>
  )
}

export default home