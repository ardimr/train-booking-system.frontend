import axios, { Axios, AxiosError } from "axios";
import { useQuery } from "react-query";

export const getAvailableSeats = async (travel_id: number, wagon_class:string) => {
  const {data} =  await axios.get(`http://localhost:8080/api/v1/seats?travel_id=${travel_id}&wagon_class=${wagon_class}`)
  return data
}

export const useAvailableSeats = (travelId: number, wagonClass:string) => {
  return useQuery({
    queryKey: ['travel_id', travelId, wagonClass],
    queryFn: () => getAvailableSeats(travelId, wagonClass),
  })
    
}