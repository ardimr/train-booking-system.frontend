import { getUserTickets } from '@/api/tickets'
import { useTickets } from '@/hooks/useTickets'
import React from 'react'

const Tickets = () => {
  const {data:tickets} = useTickets()
  return (
    <div>
      {tickets?.map((ticket:any) => <div key={ticket.ticket_id}>{ticket.ticket_id}</div>)
      }
    </div>
  )
}

export default Tickets