import { useTicketDetails } from '@/hooks/useTickets'
import React from 'react'
import TicketDetailsCard from './TicketDetailsCard'

interface TicketDetailProps {
  ticketID : number
}

const TicketDetails = ({ticketID}: TicketDetailProps) => {
  const {data} = useTicketDetails(ticketID)
  // console.log(data)
  
  return (
    <>
      {data && <TicketDetailsCard data={data} />}
    </>
  )
}

export default TicketDetails