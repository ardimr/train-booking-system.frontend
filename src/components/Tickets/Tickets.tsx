import { getUserTickets } from '@/api/tickets'
import { useTickets } from '@/hooks/useTickets'
import React from 'react'
import TicketCard from './TicketCard'
import { Ticket } from '@/models/ticket'

const Tickets = () => {
  const {data} = useTickets()
  const tickets: Ticket[] = data?.map((data:any) => {
    return {
      UserID: data.user_id,
      TicketID : data.ticket_id,
      BookingCode: data.booking_code,
      Status: data.status,
      TravelCode : data.travel_code,
      DepartureStation : {
        Code: data.departure_station.code,
        Name: data.departure_station.name,
        CityCode: data.departure_station.city_code
      },
      DestinationStation : {
        Code: data.destination_station.code,
        Name: data.destination_station.name,
        CityCode: data.destination_station.city_code,
      },
      DepartureSchedule: data.departure_schedule,
      ArrivalSchedule: data.arrival_schedule,
    }
  })
  
  return (
    <div style={{display:"flex", flexDirection:"column", width:"600px"}}>
      <h1 style={{justifySelf:"flex-start"}}>My Tickets</h1>
      <div style={{display:"flex", flexDirection:"column", overflowY:"hidden", marginBottom:"10px"}}>
        {tickets?.map((ticket) => <TicketCard key={ticket.TicketID} data={ticket}/>)}
      </div>
    </div>
  )
}

export default Tickets