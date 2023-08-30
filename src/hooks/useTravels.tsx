import { fetchTravels } from "@/api/fetchTravels"
import { useQuery } from "react-query"


export const useTravels = () => {
  return useQuery({
    queryKey: ['travels'],
    queryFn: () => fetchTravels(),
  })
    
}