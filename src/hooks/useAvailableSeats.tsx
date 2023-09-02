import { getAvailableSeats } from "@/api/seats";
import { useQuery } from "react-query";



export const useAvailableSeats = (travelId: number, wagonClass:string) => {
  return useQuery({
    queryKey: ['travel_id', travelId, wagonClass],
    queryFn: () => getAvailableSeats(travelId, wagonClass),
  })
    
}