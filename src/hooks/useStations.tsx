import { fetchStations } from "@/api/stations";
import { useQuery } from "react-query";

export const useStations = (stationInput:string) => {
  return useQuery({
    queryKey : ['fetchStations', stationInput],
    queryFn: () => fetchStations(stationInput),
  })
  
}