import { getTicketDetails, getUserTickets } from "@/api/tickets";
import { useQuery } from "react-query";

export const useTickets = () => {
  return useQuery(
    {
      queryKey: ['fetchUserTickets'],
      queryFn: () => getUserTickets(),
    }
  )
}

export const useTicketDetails = (ticketID:number) => {
  return useQuery(
    {
      queryKey: ['fetchTicketDetails', ticketID],
      queryFn: () => getTicketDetails(ticketID)
    }
  )
}