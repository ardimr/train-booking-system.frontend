import React from 'react'
import SearchTickets from '@/components/SearchTickets/SearchTickets'
import TravelCard from '@/components/TravelCard/TravelCard'
const home = () => {
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <SearchTickets />
        <div style={{height:'50px'}} />
        <TravelCard />
    </div>
  )
}

export default home