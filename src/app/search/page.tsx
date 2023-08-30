import React from 'react'
import SearchTickets from '@/components/SearchTickets/SearchTickets'
import TravelCard from '@/components/TravelCard/TravelCard'
const Search = () => {
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
        <SearchTickets />
        <div style={{height:'35px'}} />
        <TravelCard />
    </div>
  )
}

export default Search