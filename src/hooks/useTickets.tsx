import { getUserTickets } from "@/api/tickets";
import { useQuery } from "react-query";

export const useTickets = () => {
  return useQuery(
    {
      queryKey: ['fetchUserTickets'],
      queryFn: () => getUserTickets(),
    }
  )
}